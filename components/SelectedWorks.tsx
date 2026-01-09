"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { Globe, Smartphone, Building2, Rocket } from "lucide-react";

const works = [
  {
    title: "Big Tech & Google",
    description: "Experience with large-scale web applications, rigorous code reviews, and world-class engineering standards.",
    icon: Globe,
  },
  {
    title: "High-Growth Startups",
    description: "Rapid zero-to-one development. Built web & mobile apps that scale from first user to acquisition.",
    icon: Rocket,
  },
  {
    title: "Corporate Enterprise",
    description: "Digital transformation, legacy modernization, and full-stack development for established organizations.",
    icon: Building2,
  },
  {
    title: "SMEs & Individuals",
    description: "Bespoke web solutions and mobile apps tailored for small businesses and creative professionals.",
    icon: Smartphone,
  },
];

export default function SelectedWorks() {
  return (
    <section className="section bg-muted/30">
      <div className="container">
        <BlurFade delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Past Projects & Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From Silicon Valley giants to local innovators. I've built diverse solutions across the tech spectrum.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.2}>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {works.map((work) => (
              <MagicCard
                key={work.title}
                className="p-6 md:p-8 cursor-default bg-background" // Removed backdrop-blur since it's on a muted bg
                gradientColor="hsl(var(--primary) / 0.05)"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <work.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{work.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {work.description}
                </p>
              </MagicCard>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
