"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { Building2, Rocket, Store, User } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Corporates",
    pain: "Complex legacy systems, siloed data, and slow digital transformation",
    solution: "Enterprise architecture design, system integration, and AI-driven automation at scale",
  },
  {
    icon: Rocket,
    title: "Startups",
    pain: "Need to move fast but build foundations that scale",
    solution: "Lean MVPs, scalable architecture, and tech strategy that grows with you",
  },
  {
    icon: Store,
    title: "SME / UMKM",
    pain: "Limited tech resources but big operational challenges",
    solution: "Affordable automation, simple dashboards, and practical AI tools that fit your budget",
  },
  {
    icon: User,
    title: "Individuals",
    pain: "Freelancers and entrepreneurs juggling everything alone",
    solution: "Personal productivity systems, portfolio sites, and tools to scale your solo business",
  },
];

export default function WhoIHelp() {
  return (
    <section className="section bg-muted/30">
      <div className="container">
        <BlurFade delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who I Help</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I work with professionals who want their business to run smoothly 
              without constant firefighting.
            </p>
          </div>
        </BlurFade>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, idx) => (
            <BlurFade key={audience.title} delay={0.1 + idx * 0.1}>
              <MagicCard 
                className="p-6 h-full cursor-default"
                gradientColor="hsl(0 0% 88%)"
              >
                <audience.icon className="w-8 h-8 mb-4 text-muted-foreground" />
                <h3 className="font-semibold mb-2">{audience.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  <span className="font-medium text-foreground">Pain:</span> {audience.pain}
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Solution:</span> {audience.solution}
                </p>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
