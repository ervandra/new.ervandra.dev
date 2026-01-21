"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Repeat, Handshake, Check, X } from "lucide-react";

const principles = [
  {
    icon: Target,
    title: "Strategic Before Technical",
    description:
      "I start with your business goals, not technology trends. What are you trying to achieve? Where are the bottlenecks? Only then do we talk solutions.",
  },
  {
    icon: Repeat,
    title: "Systems That Scale Without You",
    description:
      "Every solution I build is designed to work independently. Documented, maintainable, and structured so your team can operate it—or hand it off entirely.",
  },
  {
    icon: Handshake,
    title: "Transparent Partnerships",
    description:
      "Fixed-scope audits, clear pricing, honest capacity communication. I'll tell you if I'm not the right fit. No surprises, no scope creep.",
  },
];

const comparison = [
  {
    agency: "Account managers, junior developers, designers—each adds coordination overhead",
    me: "Work with me directly or my team—everyone understands both the business problem and the technical solution",
  },
  {
    agency: "Monthly retainers that continue regardless of value delivered",
    me: "Fixed-scope projects with clear deliverables—you know what you're paying for",
  },
  {
    agency: "Generic frameworks applied to every client",
    me: "I focus on operations systems and automation—it's what I've built for 13+ years",
  },
  {
    agency: "Strategy decks that someone else needs to implement",
    me: "I design the system and build it—no handoff gaps between strategy and execution",
  },
  {
    agency: "Proprietary platforms that only they can maintain",
    me: "Standard tech stacks your team can understand and maintain after I'm gone",
  },
];

export default function HowIWork() {
  return (
    <section id="how-i-work" className="section">
      <div className="container">
        <BlurFade delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How I Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I've spent 13+ years building systems for companies across Indonesia, 
              Singapore, USA, and Finland—from R/GA's global clients to Indonesian startups.
            </p>
          </div>
        </BlurFade>

        {/* Opening Statement */}
        <BlurFade delay={0.15}>
          <Card className="mb-12 bg-muted/30 border-dashed">
            <CardContent className="p-6 md:p-8 text-center">
              <p className="text-lg text-muted-foreground">
                What I've learned: <span className="text-foreground font-medium">The best technology isn't the most complex.</span>{" "}
                It's the system that solves your specific problem and runs reliably without you.
              </p>
            </CardContent>
          </Card>
        </BlurFade>

        {/* Three Core Principles */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {principles.map((principle, idx) => (
            <BlurFade key={principle.title} delay={0.2 + idx * 0.1}>
              <MagicCard
                className="p-6 h-full cursor-default"
                gradientColor="hsl(0 0% 90%)"
              >
                <principle.icon className="w-8 h-8 mb-4 text-muted-foreground" />
                <h3 className="font-semibold text-lg mb-2">{principle.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </MagicCard>
            </BlurFade>
          ))}
        </div>

        {/* Differentiator Table */}
        <BlurFade delay={0.5}>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-center mb-6">
              Why Work With Me vs. Traditional Agencies?
            </h3>
            <div className="border border-border rounded-lg overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-2 bg-muted/50">
                <div className="p-4 border-r border-border">
                  <span className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                    <X className="w-4 h-4" />
                    Traditional Agencies
                  </span>
                </div>
                <div className="p-4">
                  <span className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    Working With Me
                  </span>
                </div>
              </div>
              {/* Rows */}
              {comparison.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-2 border-t border-border"
                >
                  <div className="p-4 border-r border-border text-sm text-muted-foreground">
                    {row.agency}
                  </div>
                  <div className="p-4 text-sm text-foreground">
                    {row.me}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
