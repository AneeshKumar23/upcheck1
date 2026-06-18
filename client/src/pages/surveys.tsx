import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  MessageSquareText,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

type SurveyTopic = {
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  icon: typeof ClipboardList;
};

const surveyTopics: SurveyTopic[] = [
  {
    title: "Farm Workflow Survey",
    tagline: "Day-to-day operations",
    description:
      "Share how your team monitors ponds, reviews alerts, and manages routine tasks so Upcheck can keep the workflow practical.",
    highlights: [
      "Spot friction in daily farm operations",
      "Capture quick wins for monitoring and alerts",
      "Keep the product aligned with real field use",
    ],
    icon: ClipboardList,
  },
  {
    title: "Feature Feedback Survey",
    tagline: "Product direction",
    description:
      "Tell us which features help most and which ones need refinement so the platform stays focused on what matters.",
    highlights: [
      "Prioritize improvements with direct input",
      "Validate new ideas before they ship",
      "Keep the interface familiar and efficient",
    ],
    icon: Target,
  },
  {
    title: "Community Check-in",
    tagline: "Shared priorities",
    description:
      "Help shape the next round of Upcheck updates by sharing what your team wants to see from the platform and support tools.",
    highlights: [
      "Surface the most useful support needs",
      "Capture broader aquaculture priorities",
      "Guide future survey topics and releases",
    ],
    icon: Users,
  },
];

const processSteps = [
  {
    title: "Answer a short survey",
    description:
      "Participate in a focused survey that stays close to the current Upcheck product experience.",
    icon: MessageSquareText,
  },
  {
    title: "Review the themes",
    description:
      "We use the responses to identify patterns across farm operations, product usage, and priorities.",
    icon: TrendingUp,
  },
  {
    title: "Shape what comes next",
    description:
      "Your input helps steer updates, refinements, and future participation opportunities.",
    icon: Sparkles,
  },
];

export default function Surveys() {
  return (
    <div className="min-h-screen bg-site-gradient">
      <Navigation />

      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto space-y-24">
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
              Surveys that keep Upcheck grounded in real farm needs
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Share your perspective on farm workflows, product priorities, and community needs so the Upcheck experience stays practical and familiar.
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
                Take a Survey
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline">
                See Survey Topics
              </Button>
            </div>
          </motion.section>

          <section id="survey-topics">
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Current survey topics</h2>
              <p className="text-muted-foreground">
                These survey areas follow the same straightforward layout used elsewhere in Upcheck, so the experience stays consistent.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {surveyTopics.map((topic, index) => {
                const Icon = topic.icon;

                return (
                  <motion.div
                    key={topic.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full bg-card border-card-border overflow-hidden hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 space-y-5">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#00C9E4] to-[#0067B1] text-white shadow-lg">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                            {topic.tagline}
                          </p>
                          <h3 className="text-xl font-bold mb-3">{topic.title}</h3>
                          <p className="text-sm text-muted-foreground leading-6">
                            {topic.description}
                          </p>
                        </div>
                        <div className="space-y-2">
                          {topic.highlights.map((highlight) => (
                            <div key={highlight} className="flex items-start gap-2 text-sm text-foreground/90">
                              <CheckCircle2 className="w-4 h-4 text-[#00C9E4] mt-0.5 shrink-0" />
                              <span>{highlight}</span>
                            </div>
                          ))}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-3">How participation works</h2>
              <p className="text-muted-foreground">
                The survey flow mirrors the rest of the site: simple sections, clear calls to action, and no new visual language.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full bg-card border-card-border">
                      <CardContent className="p-6 space-y-4">
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-background border border-border/50 text-[#0067B1]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                          <p className="text-sm text-muted-foreground leading-6">
                            {step.description}
                          </p>
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
                    <h2 className="text-3xl md:text-4xl font-bold">Help shape the next survey cycle</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Upcheck keeps the participation experience aligned with the rest of the product, so feedback stays easy to understand and act on.
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
                      Take a Survey
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                    <Button size="lg" variant="outline">
                      Browse Resources
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