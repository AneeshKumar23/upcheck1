import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardList,
  MapPinned,
  MessageSquareText,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Cell, Pie, PieChart } from "recharts";

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

const communityMetrics = [
  {
    value: "1250+",
    label: "Farmers Participated",
    icon: Users,
  },
  {
    value: "15",
    label: "States Covered",
    icon: MapPinned,
  },
  {
    value: "85%",
    label: "Response Rate",
    icon: BadgeCheck,
  },
  {
    value: "12",
    label: "Community Surveys Conducted",
    icon: ClipboardList,
  },
];

const communityInsights = [
  {
    name: "Disease Management",
    value: 38,
    fill: "#0067B1",
  },
  {
    name: "Feed Cost",
    value: 29,
    fill: "#00C9E4",
  },
  {
    name: "Water Quality",
    value: 21,
    fill: "#7CC9E9",
  },
  {
    name: "Market Access",
    value: 12,
    fill: "#BFE8F4",
  },
];

const communityInsightsConfig = {
  diseaseManagement: {
    label: "Disease Management",
    color: "#0067B1",
  },
  feedCost: {
    label: "Feed Cost",
    color: "#00C9E4",
  },
  waterQuality: {
    label: "Water Quality",
    color: "#7CC9E9",
  },
  marketAccess: {
    label: "Market Access",
    color: "#BFE8F4",
  },
};

const testimonials = [
  {
    quote:
      "The surveys are short, practical, and closely tied to the day-to-day decisions we make on ponds.",
    name: "Arun M.",
    role: "Shrimp Farm Owner",
  },
  {
    quote:
      "I like that the questions focus on disease, feed, and water quality because those are the issues we deal with every week.",
    name: "Meena S.",
    role: "Aquaculture Operations Lead",
  },
  {
    quote:
      "It is easy to give feedback, and it feels like the Upcheck team is listening to farmers who use the platform every day.",
    name: "Ravi K.",
    role: "Pond Supervisor",
  },
];

const activeSurveys = [
  {
    title: "Aquaculture Farm Profile Survey",
    description:
      "Help us understand farm size, setup, and daily operating patterns so future updates stay relevant.",
  },
  {
    title: "Water Quality Practices Survey",
    description:
      "Share how your team checks, records, and responds to water quality conditions across the farm.",
  },
  {
    title: "Farm Challenges Survey",
    description:
      "Tell us which operational challenges affect your work most so we can stay focused on the right problems.",
  },
  {
    title: "Technology Adoption Survey",
    description:
      "Show how your farm uses digital tools today and where simpler support would make the biggest difference.",
  },
];

export default function Surveys() {
  return (
    <div className="min-h-screen bg-site-gradient">
      <Navigation />

      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto space-y-20">
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
                Aquaculture Insights Survey Center
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Help shape the future of aquaculture through community-driven surveys and shared farming experiences.
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

          <section className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Community Metrics</h2>
              <p className="text-muted-foreground">
                These numbers reflect the current participation base and keep the page aligned with the existing Upcheck visual system.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {communityMetrics.map((metric, index) => (
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
                        <metric.icon className="h-5 w-5" />
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
              ))}
            </div>
          </section>

          <section className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Community Insights</h2>
              <div className="space-y-3 text-muted-foreground max-w-3xl mx-auto">
                <p>Disease management is currently the most reported challenge among participating farmers.</p>
                <p>Feed costs and water quality remain major concerns across aquaculture operations.</p>
                <p>Based on responses collected from the Upcheck community.</p>
              </div>
            </div>

            <Card className="bg-card border-card-border overflow-hidden">
              <CardContent className="p-6 md:p-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
                <ChartContainer config={communityInsightsConfig} className="min-h-[320px] w-full">
                  <PieChart>
                    <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                    <Pie
                      data={communityInsights}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={72}
                      outerRadius={110}
                      paddingAngle={3}
                      strokeWidth={2}
                    >
                      {communityInsights.map((entry) => (
                        <Cell key={entry.name} fill={entry.fill} />
                      ))}
                    </Pie>
                  </PieChart>
                </ChartContainer>

                <div className="space-y-4">
                  <div>
                    <Badge className="mb-3 bg-background/80 text-foreground border border-border/50">
                      Biggest Challenges Faced by Farmers
                    </Badge>
                    <h3 className="text-2xl font-bold">Survey response breakdown</h3>
                  </div>

                  <div className="space-y-3">
                    {communityInsights.map((item) => (
                      <div key={item.name} className="flex items-center justify-between gap-4 rounded-xl border border-border/50 bg-background/40 px-4 py-3">
                        <div className="flex items-center gap-3">
                          <span
                            className="h-3 w-3 rounded-full shrink-0"
                            style={{ backgroundColor: item.fill }}
                          />
                          <span className="text-sm font-medium">{item.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">What Farmers Are Saying</h2>
              <p className="text-muted-foreground">
                Three short testimonials keep the page grounded in the same straightforward Upcheck tone.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-card border-card-border">
                    <CardContent className="p-6 space-y-4">
                      <div className="text-sm leading-7 text-muted-foreground">
                        <span className="text-2xl font-bold text-[#00C9E4] leading-none">“</span>
                        {testimonial.quote}
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="space-y-8" id="active-surveys">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Active Surveys</h2>
              <p className="text-muted-foreground">
                These survey items match the current participation focus and stay within the existing Upcheck component system.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {activeSurveys.map((survey, index) => (
                <motion.div
                  key={survey.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-card border-card-border overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 space-y-4">
                      <Badge className="bg-background/80 text-foreground border border-border/50">
                        Active
                      </Badge>
                      <h3 className="text-xl font-bold">{survey.title}</h3>
                      <p className="text-sm text-muted-foreground leading-6">
                        {survey.description}
                      </p>
                      <Button
                        variant="outline"
                        className="w-fit"
                      >
                        Open Survey
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
                    <h2 className="text-3xl md:text-4xl font-bold">Shape the Future of Aquaculture</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Your participation helps create better tools, stronger insights, and a smarter aquaculture community.
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
                      View Active Surveys
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