import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ShieldAlert,
  Sparkles,
  Target,
  Waves,
} from "lucide-react";

import image1 from "@assets/upcheck_iot_buoy.jpg";
import image2 from "@assets/ai_feeding_dashboard.jpg";
import image3 from "@assets/farm_management_suite.jpg";
import image4 from "@assets/analytics_disease_intelligence.png";

const detailedSections = [
  {
    name: "UpCheck IoT Monitoring Device",
    icon: Waves,
    description:
      "A solar-powered floating IoT device that continuously monitors critical pond conditions including pH, dissolved oxygen, temperature, humidity, and rainfall. Real-time data is delivered directly to farmers through a simple mobile dashboard, helping teams make faster and more informed decisions.",
    points: [
      "Real-time water quality monitoring",
      "Continuous pond visibility",
      "Solar-powered autonomous operation",
      "Mobile dashboard access",
      "Instant environmental insights",
    ],
    image: image1,
  },
  {
    name: "AI Feeding Intelligence",
    icon: Target,
    description:
      "Transform live pond data into personalized feeding recommendations. UpCheck analyzes pond conditions and farming patterns to help farmers optimize feeding schedules, reduce waste, and improve shrimp growth efficiency.",
    points: [
      "Smart feeding recommendations",
      "Reduced feed waste",
      "Data-driven feeding schedules",
      "Improved growth consistency",
      "Better operational efficiency",
    ],
    image: image2,
  },
  {
    name: "Farm Management Suite",
    icon: BarChart3,
    description:
      "Manage farm operations from a single platform. Track inventory, monitor expenses, manage pond cycles, coordinate workforce activities, and maintain complete visibility across daily operations.",
    points: [
      "Inventory management",
      "Expense tracking",
      "Workforce coordination",
      "Pond-cycle management",
      "Operational visibility",
    ],
    image: image3,
  },
  {
    name: "Analytics & Disease Intelligence",
    icon: ShieldAlert,
    description:
      "Gain access to advanced analytics, disease-risk alerts, weather intelligence, and performance insights that help farmers identify problems early and improve harvest outcomes.",
    points: [
      "Disease-risk alerts",
      "Cross-pond analytics",
      "Weather intelligence",
      "Performance reporting",
      "Early warning system",
    ],
    image: image4,
  },
];

const reasons = [
  {
    title: "Built for Aquaculture",
    description:
      "Unlike generic monitoring platforms, UpCheck is designed specifically for shrimp farming operations. Every feature is built around real-world pond conditions, farm workflows, and day-to-day operational needs.",
    icon: Target,
  },
  {
    title: "From Monitoring to Action",
    description:
      "UpCheck goes beyond displaying sensor data. Intelligent feeding recommendations, disease-risk alerts, and operational insights help farmers take action with confidence.",
    icon: Activity,
  },
  {
    title: "One Platform, Complete Visibility",
    description:
      "Manage pond health, inventory, expenses, workforce activities, and analytics from a single connected platform without switching between multiple tools.",
    icon: Sparkles,
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-site-gradient">
      <Navigation />

      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto space-y-16 md:space-y-20">
          {/* 1. Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-5 bg-background/80 text-foreground border border-border/50">
              Upcheck Products
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
              Everything you need to run a smarter farm
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Upcheck brings monitoring, feeding, analytics, and risk alerts together in one connected experience built for aquaculture teams.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="gap-2"
                onClick={() => {
                  const el = document.getElementById("solutions");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  background: "linear-gradient(90deg, #00C9E4 0%, #0067B1 100%)",
                  border: "none",
                }}
              >
                View Solutions
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.section>

          {/* 2-5. Product Solutions */}
          <div id="solutions" className="space-y-10 md:space-y-14 scroll-mt-24">
            {detailedSections.map((section, index) => {
              const Icon = section.icon;
              const reversed = index % 2 === 1;

              return (
                <motion.div
                  key={section.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5 }}
                  className={`flex flex-col-reverse gap-6 items-stretch ${
                    reversed ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  {/* Text Card - 50% Width on Desktop */}
                  <Card
                    className="bg-card border-card-border overflow-hidden w-full lg:w-[50%]"
                  >
                    <CardContent className="p-6 md:p-8 flex flex-col justify-center h-full">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#00C9E4] to-[#0067B1] text-white mb-4 shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2">{section.name}</h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                        {section.description}
                      </p>
                      <div className="space-y-2">
                        {section.points.map((point) => (
                          <div key={point} className="flex items-start gap-2.5">
                            <div className="mt-0.5 w-5 h-5 rounded-full bg-[#00C9E4]/10 flex items-center justify-center shrink-0">
                              <CheckCircle2 className="w-3 h-3 text-[#00C9E4]" />
                            </div>
                            <p className="text-xs md:text-sm text-foreground/90 leading-relaxed">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Image Card - 50% Width on Desktop, Integrated with radial glow and tighter padding */}
                  <Card
                    className="bg-card border-card-border overflow-hidden w-full lg:w-[50%] flex items-stretch"
                  >
                    <CardContent className="p-4 w-full h-full flex items-stretch">
                      <div className="w-full h-full rounded-2xl border border-border/50 bg-site-gradient relative overflow-hidden flex items-center justify-center p-4">
                        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_right,_rgba(0,201,228,0.12),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(0,103,177,0.1),_transparent_38%)]" />
                        <img
                          src={section.image}
                          alt={section.name}
                          className="relative z-10 w-full h-auto max-h-[260px] md:max-h-[300px] object-contain rounded-xl shadow-md transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* 6. Why Choose UpCheck */}
          <section className="space-y-8 pt-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Why Choose UpCheck</h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Built specifically for aquaculture operations, UpCheck combines
                real-time monitoring, intelligent automation, and farm management tools
                into one connected platform.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;

                return (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                  >
                    <Card className="h-full bg-card border-card-border hover:shadow-md transition-shadow">
                      <CardContent className="p-5 space-y-3">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#00C9E4]/10 text-[#0067B1]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold">{reason.title}</h3>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                          {reason.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </section>
        </div>
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}