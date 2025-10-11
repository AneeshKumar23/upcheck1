import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, User } from "lucide-react";

// Define article type
interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  author: string;
  date: string;
  tags: string[];
}

export default function Resources() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [postsPerPage, setPostsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch posts from API when component mounts
  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/posts");
        const postsData = await res.json();

        // Transform the fetched posts to Article[]
        const transformedArticles: Article[] = postsData.map((post: any) => ({
          id: post.id,
          title: post.translations?.en?.title ?? post.title ?? "",
          description: post.translations?.en?.content ?? post.description ?? "",
          category: post.categories?.[0] ?? "General",
          image: post.thumbnail ?? "",
          author: post.author ?? "Unknown",
          date: new Date(post.publishedAt).toLocaleDateString(),
          tags: post.tags ?? [],
        }));

        setArticles(transformedArticles);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    }

    fetchPosts();
  }, []);

  // Get categories dynamically
  const uniqueCategories = Array.from(
    new Set(articles.flatMap((article) => article.category || ["General"]))
  );
  const categories: string[] = ["All", ...uniqueCategories];

  // Filter articles based on category and search query
  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // PAGINATION LOGIC
  const totalPages = Math.ceil(filteredArticles.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) handlePageChange(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) handlePageChange(currentPage - 1);
  };

  // Reset to first page when filters or search change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, postsPerPage]);

  return (
    <div className="min-h-screen bg-site-gradient">
      <Navigation />

      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1
              className="text-4xl md:text-6xl font-bold mb-4"
              style={{
                background: "linear-gradient(90deg, #00C9E4 0%, #0067B1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Resources
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore articles, guides, and tips to enhance your shrimp farming.
            </p>
          </motion.div>

          {/* Search + Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search Posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background/50 border-border/50"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : ""
                  }
                  style={
                    selectedCategory === category
                      ? {
                          background:
                            "linear-gradient(90deg, #00C9E4 0%, #0067B1 100%)",
                          border: "none",
                        }
                      : {}
                  }
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Pagination Controls (Top) */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Posts per page:</span>
                <select
                  className="border rounded px-2 py-1 bg-background"
                  value={postsPerPage}
                  onChange={(e) => setPostsPerPage(Number(e.target.value))}
                >
                  <option value={3}>3</option>
                  <option value={6}>6</option>
                  <option value={9}>9</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                >
                  Prev
                </Button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <Button
                    key={i}
                    variant={currentPage === i + 1 ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePageChange(i + 1)}
                    style={
                      currentPage === i + 1
                        ? {
                            background:
                              "linear-gradient(90deg, #00C9E4 0%, #0067B1 100%)",
                            border: "none",
                            color: "white",
                          }
                        : {}
                    }
                  >
                    {i + 1}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Articles Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
          >
            {currentArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-card border-card-border">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-background/90 text-foreground border-0">
                      {article.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {article.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.slice(0, 4).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <a href={`/resources/${article.id}`} className="w-full">
                      <Button
                        variant="ghost"
                        className="w-full text-primary hover:text-primary"
                        style={{
                          color: "#00C9E4",
                        }}
                      >
                        Read More →
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination Controls (Bottom) */}
          {filteredArticles.length > postsPerPage && (
            <div className="flex flex-col items-center justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Posts per page:</span>
                <select
                  className="border rounded px-2 py-1 bg-background"
                  value={postsPerPage}
                  onChange={(e) => setPostsPerPage(Number(e.target.value))}
                >
                  <option value={3}>3</option>
                  <option value={6}>6</option>
                  <option value={9}>9</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                >
                  Prev
                </Button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <Button
                    key={i}
                    variant={currentPage === i + 1 ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePageChange(i + 1)}
                    style={
                      currentPage === i + 1
                        ? {
                            background:
                              "linear-gradient(90deg, #00C9E4 0%, #0067B1 100%)",
                            border: "none",
                            color: "white",
                          }
                        : {}
                    }
                  >
                    {i + 1}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
