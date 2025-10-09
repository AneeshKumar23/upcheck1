import { useRoute } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Clock, Twitter, Linkedin, Facebook, Link2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const articles = [
  {
    id: 1,
    title: "Shrimp Farming Made Easy with Tarpaulin Ponds",
    category: "Diseases",
    author: "Jovan",
    date: "6/11/2025",
    readTime: "3 min read",
    heroImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&auto=format&fit=crop",
    content: `In the realm of vannamei shrimp farming, the quality of shrimp fry plays a pivotal role in determining the success of the entire operation. It is essential to obtain high-quality fry to ensure the growth of healthy shrimp, ultimately leading to the achievement of production targets. The process of hatching vannamei shrimp is intricate and involves several stages, including the selection of broodstock, maintenance, spawning, egg hatching, and larvae maintenance.

Hatcheries that supply high-quality fry to farmers have a thorough understanding of the vannamei shrimp hatching process. They consider factors such as water source quality, environmental conditions, and adequate facilities and equipment to ensure the production of healthy shrimp fry. The water source must have sufficient and accessible freshwater, and the environment must be free from diseases to prevent transmission.

To initiate the hatching process, farmers must prepare containers, including tanks for broodstock handling, egg handling, larva maintenance, and natural feed culture. These tanks must be thoroughly cleaned and disinfected to prevent the spread of diseases. The medium used for maintenance, typically seawater, must be free from mud and sterilized with chlorine to ensure the health and well-being of the shrimp.

The acquisition of high-quality broodstock is crucial, and farmers must ensure that the broodstock is certified Specific Pathogen Free (SPF) and Specific Pathogen Resistant (SPR). The broodstock must be maintained in a separate space, with male and female shrimp kept apart, and fed with high-protein feed to accelerate gonad maturation.

The spawning process involves the release of eggs by female broodstock, followed by fertilization by sperm from the spermatophore. The eggs are then transferred to a hatching pond, where they develop into nauplii. The nauplii undergo several molting stages, and harvesting is done when they reach stage 4 (N4).

Larvae maintenance is a critical stage, and farmers must provide feed according to the size of the larvae's mouth. Natural feed, such as artemia, is given during the Nauplius VI – Mysis III stages, while artificial feed is provided to support the growth and survival of vannamei shrimp larvae.

Water quality management is essential, and farmers must regularly check the water quality, perform water replacement, and siphoning to maintain optimal conditions. The water quality parameters must be kept within a specific range to support the life and growth of larvae until they develop into post-larvae.

Shrimp farmers can benefit from understanding the vannamei shrimp hatching process, and by implementing strict operating standards and using high-quality broodstock, they can increase their chances of success. For more information and guidance on shrimp cultivation, Follow Upcheck India for more updates and insights on the latest techniques and best practices in the industry.`,
    tags: ["Shrimp", "Farming", "Water", "Management", "Disease", "Aquaculture"]
  },
  {
    id: 2,
    title: "Empowering Shrimp Farmers through Dedicated Field Support",
    category: "General",
    author: "Jovan",
    date: "5/8/2025",
    readTime: "4 min read",
    heroImage: "https://images.unsplash.com/photo-1535850452227-f4e8ded1f46f?w=1200&auto=format&fit=crop",
    content: `In the realm of vannamei shrimp farming, the quality of shrimp fry plays a pivotal role in determining the success of the entire operation. It is essential to obtain high-quality fry to ensure the growth of healthy shrimp, ultimately leading to the achievement of production targets. The process of hatching vannamei shrimp is intricate and involves several stages, including the selection of broodstock, maintenance, spawning, egg hatching, and larvae maintenance.

Hatcheries that supply high-quality fry to farmers have a thorough understanding of the vannamei shrimp hatching process. They consider factors such as water source quality, environmental conditions, and adequate facilities and equipment to ensure the production of healthy shrimp fry. The water source must have sufficient and accessible freshwater, and the environment must be free from diseases to prevent transmission.

To initiate the hatching process, farmers must prepare containers, including tanks for broodstock handling, egg handling, larva maintenance, and natural feed culture. These tanks must be thoroughly cleaned and disinfected to prevent the spread of diseases. The medium used for maintenance, typically seawater, must be free from mud and sterilized with chlorine to ensure the health and well-being of the shrimp.

The acquisition of high-quality broodstock is crucial, and farmers must ensure that the broodstock is certified Specific Pathogen Free (SPF) and Specific Pathogen Resistant (SPR). The broodstock must be maintained in a separate space, with male and female shrimp kept apart, and fed with high-protein feed to accelerate gonad maturation.

The spawning process involves the release of eggs by female broodstock, followed by fertilization by sperm from the spermatophore. The eggs are then transferred to a hatching pond, where they develop into nauplii. The nauplii undergo several molting stages, and harvesting is done when they reach stage 4 (N4).

Larvae maintenance is a critical stage, and farmers must provide feed according to the size of the larvae's mouth. Natural feed, such as artemia, is given during the Nauplius VI – Mysis III stages, while artificial feed is provided to support the growth and survival of vannamei shrimp larvae.

Water quality management is essential, and farmers must regularly check the water quality, perform water replacement, and siphoning to maintain optimal conditions. The water quality parameters must be kept within a specific range to support the life and growth of larvae until they develop into post-larvae.

Shrimp farmers can benefit from understanding the vannamei shrimp hatching process, and by implementing strict operating standards and using high-quality broodstock, they can increase their chances of success. For more information and guidance on shrimp cultivation, Follow Upcheck India for more updates and insights on the latest techniques and best practices in the industry.`,
    tags: ["Support", "Training", "Field", "Management"]
  },
  {
    id: 3,
    title: "Optimizing Shrimp Growth Through Understanding Molting Phases",
    category: "General",
    author: "Jovan",
    date: "5/5/2025",
    readTime: "3 min read",
    heroImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&auto=format&fit=crop",
    content: `In the realm of vannamei shrimp farming, the quality of shrimp fry plays a pivotal role in determining the success of the entire operation. It is essential to obtain high-quality fry to ensure the growth of healthy shrimp, ultimately leading to the achievement of production targets. The process of hatching vannamei shrimp is intricate and involves several stages, including the selection of broodstock, maintenance, spawning, egg hatching, and larvae maintenance.

Hatcheries that supply high-quality fry to farmers have a thorough understanding of the vannamei shrimp hatching process. They consider factors such as water source quality, environmental conditions, and adequate facilities and equipment to ensure the production of healthy shrimp fry. The water source must have sufficient and accessible freshwater, and the environment must be free from diseases to prevent transmission.

To initiate the hatching process, farmers must prepare containers, including tanks for broodstock handling, egg handling, larva maintenance, and natural feed culture. These tanks must be thoroughly cleaned and disinfected to prevent the spread of diseases. The medium used for maintenance, typically seawater, must be free from mud and sterilized with chlorine to ensure the health and well-being of the shrimp.

The acquisition of high-quality broodstock is crucial, and farmers must ensure that the broodstock is certified Specific Pathogen Free (SPF) and Specific Pathogen Resistant (SPR). The broodstock must be maintained in a separate space, with male and female shrimp kept apart, and fed with high-protein feed to accelerate gonad maturation.

The spawning process involves the release of eggs by female broodstock, followed by fertilization by sperm from the spermatophore. The eggs are then transferred to a hatching pond, where they develop into nauplii. The nauplii undergo several molting stages, and harvesting is done when they reach stage 4 (N4).

Larvae maintenance is a critical stage, and farmers must provide feed according to the size of the larvae's mouth. Natural feed, such as artemia, is given during the Nauplius VI – Mysis III stages, while artificial feed is provided to support the growth and survival of vannamei shrimp larvae.

Water quality management is essential, and farmers must regularly check the water quality, perform water replacement, and siphoning to maintain optimal conditions. The water quality parameters must be kept within a specific range to support the life and growth of larvae until they develop into post-larvae.

Shrimp farmers can benefit from understanding the vannamei shrimp hatching process, and by implementing strict operating standards and using high-quality broodstock, they can increase their chances of success. For more information and guidance on shrimp cultivation, Follow Upcheck India for more updates and insights on the latest techniques and best practices in the industry.`,
    tags: ["Growth", "Molting", "Development"]
  },
  {
    id: 4,
    title: "Vannamei Shrimp Hatching Techniques for Successful Cultivation",
    category: "Diseases",
    author: "Jovan",
    date: "5/2/2025",
    readTime: "3 min read",
    heroImage: "https://images.unsplash.com/photo-1565098772267-60af42b81ef2?w=1200&auto=format&fit=crop",
    content: `In the realm of vannamei shrimp farming, the quality of shrimp fry plays a pivotal role in determining the success of the entire operation. It is essential to obtain high-quality fry to ensure the growth of healthy shrimp, ultimately leading to the achievement of production targets. The process of hatching vannamei shrimp is intricate and involves several stages, including the selection of broodstock, maintenance, spawning, egg hatching, and larvae maintenance.

Hatcheries that supply high-quality fry to farmers have a thorough understanding of the vannamei shrimp hatching process. They consider factors such as water source quality, environmental conditions, and adequate facilities and equipment to ensure the production of healthy shrimp fry. The water source must have sufficient and accessible freshwater, and the environment must be free from diseases to prevent transmission.

To initiate the hatching process, farmers must prepare containers, including tanks for broodstock handling, egg handling, larva maintenance, and natural feed culture. These tanks must be thoroughly cleaned and disinfected to prevent the spread of diseases. The medium used for maintenance, typically seawater, must be free from mud and sterilized with chlorine to ensure the health and well-being of the shrimp.

The acquisition of high-quality broodstock is crucial, and farmers must ensure that the broodstock is certified Specific Pathogen Free (SPF) and Specific Pathogen Resistant (SPR). The broodstock must be maintained in a separate space, with male and female shrimp kept apart, and fed with high-protein feed to accelerate gonad maturation.

The spawning process involves the release of eggs by female broodstock, followed by fertilization by sperm from the spermatophore. The eggs are then transferred to a hatching pond, where they develop into nauplii. The nauplii undergo several molting stages, and harvesting is done when they reach stage 4 (N4).

Larvae maintenance is a critical stage, and farmers must provide feed according to the size of the larvae's mouth. Natural feed, such as artemia, is given during the Nauplius VI – Mysis III stages, while artificial feed is provided to support the growth and survival of vannamei shrimp larvae.

Water quality management is essential, and farmers must regularly check the water quality, perform water replacement, and siphoning to maintain optimal conditions. The water quality parameters must be kept within a specific range to support the life and growth of larvae until they develop into post-larvae.

Shrimp farmers can benefit from understanding the vannamei shrimp hatching process, and by implementing strict operating standards and using high-quality broodstock, they can increase their chances of success. For more information and guidance on shrimp cultivation, Follow Upcheck India for more updates and insights on the latest techniques and best practices in the industry.`,
    tags: ["Shrimp", "Farming", "Water", "Management", "Disease", "Aquaculture"]
  },
  {
    id: 5,
    title: "Successful Shrimp Farming Practices for Vannamei Shrimp Cultivation",
    category: "Tips",
    author: "Jovan",
    date: "4/23/2025",
    readTime: "4 min read",
    heroImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&auto=format&fit=crop",
    content: `In the realm of vannamei shrimp farming, the quality of shrimp fry plays a pivotal role in determining the success of the entire operation. It is essential to obtain high-quality fry to ensure the growth of healthy shrimp, ultimately leading to the achievement of production targets. The process of hatching vannamei shrimp is intricate and involves several stages, including the selection of broodstock, maintenance, spawning, egg hatching, and larvae maintenance.

Hatcheries that supply high-quality fry to farmers have a thorough understanding of the vannamei shrimp hatching process. They consider factors such as water source quality, environmental conditions, and adequate facilities and equipment to ensure the production of healthy shrimp fry. The water source must have sufficient and accessible freshwater, and the environment must be free from diseases to prevent transmission.

To initiate the hatching process, farmers must prepare containers, including tanks for broodstock handling, egg handling, larva maintenance, and natural feed culture. These tanks must be thoroughly cleaned and disinfected to prevent the spread of diseases. The medium used for maintenance, typically seawater, must be free from mud and sterilized with chlorine to ensure the health and well-being of the shrimp.

The acquisition of high-quality broodstock is crucial, and farmers must ensure that the broodstock is certified Specific Pathogen Free (SPF) and Specific Pathogen Resistant (SPR). The broodstock must be maintained in a separate space, with male and female shrimp kept apart, and fed with high-protein feed to accelerate gonad maturation.

The spawning process involves the release of eggs by female broodstock, followed by fertilization by sperm from the spermatophore. The eggs are then transferred to a hatching pond, where they develop into nauplii. The nauplii undergo several molting stages, and harvesting is done when they reach stage 4 (N4).

Larvae maintenance is a critical stage, and farmers must provide feed according to the size of the larvae's mouth. Natural feed, such as artemia, is given during the Nauplius VI – Mysis III stages, while artificial feed is provided to support the growth and survival of vannamei shrimp larvae.

Water quality management is essential, and farmers must regularly check the water quality, perform water replacement, and siphoning to maintain optimal conditions. The water quality parameters must be kept within a specific range to support the life and growth of larvae until they develop into post-larvae.

Shrimp farmers can benefit from understanding the vannamei shrimp hatching process, and by implementing strict operating standards and using high-quality broodstock, they can increase their chances of success. For more information and guidance on shrimp cultivation, Follow Upcheck India for more updates and insights on the latest techniques and best practices in the industry.`,
    tags: ["Shrimp", "Aquaculture", "Farming", "Water", "Management", "Cultivation"]
  }
];

export default function Article() {
  const [, params] = useRoute("/resources/:id");
  const { toast } = useToast();
  const articleId = params?.id ? parseInt(params.id) : 1;
  const article = articles.find(a => a.id === articleId) || articles[0];

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "The article link has been copied to your clipboard.",
    });
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(article.title)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-site-gradient">
      <Navigation />
      
      <div 
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${article.heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <a href="/resources" className="inline-flex items-center gap-2 text-white mb-6 hover:underline">
                <ArrowLeft className="w-4 h-4" />
                Back to Resources
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <main className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-lg p-8 md:p-12 shadow-lg border border-card-border"
          >
            <Badge 
              className="mb-4"
              style={{
                background: "linear-gradient(90deg, #00C9E4 0%, #0067B1 100%)",
                color: "white",
                border: "none"
              }}
            >
              {article.category}
            </Badge>

            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-xl font-bold mb-4">Related Topics</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <h3 className="text-lg font-semibold">Share this post</h3>
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={shareOnTwitter}
                    className="hover:text-primary"
                  >
                    <Twitter className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={shareOnLinkedIn}
                    className="hover:text-primary"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={shareOnFacebook}
                    className="hover:text-primary"
                  >
                    <Facebook className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={copyLink}
                    className="flex items-center gap-2"
                  >
                    <Link2 className="w-4 h-4" />
                    Copy link
                  </Button>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
