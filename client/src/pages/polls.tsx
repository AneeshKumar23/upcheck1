import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  CheckCircle2,
  Droplets,
  Fish,
  Leaf,
  MessageSquareText,
  Scale,
  ShieldAlert,
  Sparkles,
  ThermometerSun,
  Users,
  Waves,
} from "lucide-react";

const liveMetrics = [
  { value: "2500+", label: "Votes Cast", icon: Users },
  { value: "42", label: "Active Polls", icon: BadgeCheck },
  { value: "18", label: "States Covered", icon: Waves },
  { value: "91%", label: "Community Engagement", icon: BarChart3 },
];

const featuredPolls = [
  {
    title: "What is your biggest challenge in aquaculture?",
    participants: "1,248 Participants",
    options: ["Disease Management", "Feed Cost", "Water Quality", "Market Access"],
  },
  {
    title: "Which technology creates the most impact?",
    participants: "987 Participants",
    options: ["Water Monitoring", "AI Analytics", "Automation", "Mobile Farm Apps"],
  },
  {
    title: "Which species do you primarily farm?",
    participants: "1,563 Participants",
    options: ["Shrimp", "Tilapia", "Catfish", "Carp"],
  },
  {
    title: "Which Upcheck feature is most valuable?",
    participants: "1,104 Participants",
    options: ["Real-Time Alerts", "Water Monitoring", "Resource Library", "Community Insights"],
  },
];

const resultCards = [
  {
    title: "Best Water Monitoring Method",
    winner: "IoT Sensors",
    percent: "67% Votes",
    insight: "Most farmers prefer continuous monitoring over manual testing.",
    icon: Droplets,
  },
  {
    title: "Preferred Feed Strategy",
    winner: "Optimized Feeding Schedule",
    percent: "59% Votes",
    insight: "Farmers report improved efficiency through scheduled feeding practices.",
    icon: Scale,
  },
  {
    title: "Most Requested Upcheck Feature",
    winner: "Real-Time Alerts",
    percent: "71% Votes",
    insight: "Real-time notifications remain the most requested operational feature.",
    icon: ShieldAlert,
  },
];

const industryTopics = [
  { label: "Farm Operations", icon: Fish },
  { label: "Water Quality", icon: Droplets },
  { label: "Disease Management", icon: ThermometerSun },
  { label: "Technology Adoption", icon: Bot },
  { label: "Sustainability", icon: Leaf },
  { label: "Market Trends", icon: MessageSquareText },
];

export default function Polls() {
  return (
    <div className="min-h-screen bg-site-gradient">
      <Navigation />

      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto space-y-16">
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-5 bg-background/80 text-foreground border border-border/50">
              Participate in Upcheck
            </Badge>
            <h1
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{
                background: "linear-gradient(90deg, #00C9E4 0%, #0067B1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Aquaculture Community Pulse
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover what farmers across the aquaculture community are thinking, prioritizing, and experiencing right now.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="gap-2"
                style={{
                  background: "linear-gradient(90deg, #00C9E4 0%, #0067B1 100%)",
                  border: "none",
                }}
              >
                Vote Now
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline">
                View Results
              </Button>
            </div>
          </motion.section>

          <section className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Live Community Snapshot</h2>
              <p className="text-muted-foreground">
                A quick view of participation across the Upcheck community.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {liveMetrics.map((metric, index) => {
                const Icon = metric.icon;

                return (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full bg-card border-card-border">
                      <CardContent className="p-6 text-center space-y-3">
                        <div className="mx-auto h-10 w-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#00C9E4] to-[#0067B1] text-white shadow-lg">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div
                          className="text-3xl md:text-4xl font-bold"
                          style={{
                            background: "linear-gradient(90deg, #00C9E4 0%, #0067B1 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                        >
                          {metric.value}
                        </div>
                        <p className="text-sm text-muted-foreground leading-6">{metric.label}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </section>

          <section className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Polls</h2>
              <p className="text-muted-foreground">
                Vote on the topics shaping day-to-day aquaculture decisions.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {featuredPolls.map((poll, index) => (
                <motion.div
                  key={poll.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-card border-card-border overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 space-y-5 h-full flex flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <Badge className="mb-3 bg-background/80 text-foreground border border-border/50">
                            <span className="mr-2 inline-flex items-center">
                              <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            </span>
                            Live Poll
                          </Badge>
                          <h3 className="text-xl font-bold leading-7">{poll.title}</h3>
                          <p className="mt-2 text-sm text-muted-foreground">{poll.participants}</p>
                        </div>
                        <Sparkles className="w-5 h-5 text-[#00C9E4] shrink-0" />
                      </div>

                      <div className="grid gap-3 flex-1">
                        {poll.options.map((option) => (
                          <div
                            key={option}
                            className="flex items-center justify-between rounded-xl border border-border/50 bg-background/40 px-4 py-3 cursor-pointer transition-colors duration-200 hover:bg-background/60 hover:border-border"
                          >
                            <div className="flex items-center gap-3">
                              <span className="h-2.5 w-2.5 rounded-full bg-[#00C9E4]" />
                              <span className="text-sm font-medium">{option}</span>
                            </div>
                            <CheckCircle2 className="w-4 h-4 text-[#0067B1]" />
                          </div>
                        ))}
                      </div>

                      <Button
                        className="w-full gap-2"
                        style={{
                          background: "linear-gradient(90deg, #00C9E4 0%, #0067B1 100%)",
                          border: "none",
                        }}
                      >
                        Cast Vote
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">What Farmers Are Voting For</h2>
              <p className="text-muted-foreground">
                Current preferences from the community, shown as result cards without charts.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {resultCards.map((result, index) => {
                const Icon = result.icon;

                return (
                  <motion.div
                    key={result.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full bg-card border-card-border overflow-hidden">
                      <CardContent className="p-6 space-y-5 h-full flex flex-col">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#00C9E4] to-[#0067B1] text-white shadow-lg">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="space-y-4 flex-1 flex flex-col">
                          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2">
                            Community Result
                          </p>
                          <h3 className="text-xl font-bold mb-3">{result.title}</h3>
                          <div className="rounded-xl border border-border/50 bg-background/40 p-4 space-y-2">
                            <p className="text-sm text-muted-foreground">Winner</p>
                            <p className="text-lg font-semibold">{result.winner}</p>
                            <p className="text-sm text-[#0067B1] font-medium">{result.percent}</p>
                          </div>
                          <p className="text-sm text-muted-foreground leading-6">{result.insight}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </section>

          <section className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Explore Industry Topics</h2>
              <p className="text-muted-foreground">
                Browse the broader themes that often shape poll participation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industryTopics.map((topic, index) => {
                const Icon = topic.icon;

                return (
                  <motion.div
                    key={topic.label}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full bg-card border-card-border hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 flex items-center gap-4">
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-background border border-border/50 text-[#0067B1] shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{topic.label}</h3>
                          <p className="text-sm text-muted-foreground">Community discussion theme</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </section>

          <section>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <Card className="bg-card border-card-border overflow-hidden">
                <CardContent className="p-8 md:p-10 text-center space-y-6">
                  <Badge className="bg-background/80 text-foreground border border-border/50">
                    Community input
                  </Badge>
                  <div className="space-y-3">
                    <h2 className="text-3xl md:text-4xl font-bold">Your Vote Shapes Future Aquaculture Solutions</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Join thousands of farmers helping identify industry priorities, operational challenges, and technology opportunities.
                    </p>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Help identify priorities, challenges, and opportunities shaping aquaculture.
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button
                      size="lg"
                      className="gap-2"
                      style={{
                        background: "linear-gradient(90deg, #00C9E4 0%, #0067B1 100%)",
                        border: "none",
                      }}
                    >
                      Vote Now
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                    <Button size="lg" variant="outline">
                      Participate in Surveys
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}