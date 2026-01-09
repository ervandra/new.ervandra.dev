"use client";

import Link from "next/link";
import { BOOK_INTRO_URL, WHATSAPP_URL } from "@/lib/links";
import { track } from "@/lib/analytics";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { MagicCard } from "@/components/ui/magic-card";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Calendar, MessageCircle, Layers, Cpu, Code2, Shield } from "lucide-react";

const capabilities = [
  { icon: Layers, title: "Strategic Systems Design", desc: "Map your ops, design the architecture" },
  { icon: Cpu, title: "AI Enablement", desc: "Practical AI, not hype" },
  { icon: Code2, title: "Custom Development", desc: "Web apps, tools, dashboards" },
  { icon: Shield, title: "Change-Control Discipline", desc: "Ship reliably, every time" },
];

export default function Hero() {
  const hasWA = Boolean(WHATSAPP_URL);
  const hasBook = Boolean(BOOK_INTRO_URL);

  return (
    <section className="relative min-h-[85vh] flex items-center py-20 overflow-hidden">
      {/* FlickeringGrid Background */}
      <FlickeringGrid
        className="absolute inset-0 z-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]"
        squareSize={4}
        gridGap={6}
        color="rgb(0, 0, 0)"
        maxOpacity={0.15}
        flickerChance={0.1}
      />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <BlurFade delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm border border-border rounded-full bg-background/80 backdrop-blur">
              <span className="w-2 h-2 bg-foreground rounded-full animate-pulse" />
              Strategic Systems Architect
            </div>
          </BlurFade>

          {/* Headline */}
          <BlurFade delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              I Build Systems That Make Your{" "}
              <span className="text-muted-foreground">Business Run Without You</span>
            </h1>
          </BlurFade>

          {/* Subheadline */}
          <BlurFade delay={0.3}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Strategic tech architecture for insurance agents, property agents, 
              business owners, and entrepreneurs who want to scale operations without chaos.
            </p>
          </BlurFade>

          {/* CTAs */}
          <BlurFade delay={0.4}>
            <div className="flex flex-wrap gap-4 justify-center mb-16">
              {hasBook ? (
                <Button size="lg" className="gap-2" asChild>
                  <a
                    href={BOOK_INTRO_URL!}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track("cta_click", { cta: "book_intro", location: "hero" })}
                  >
                    <Calendar className="w-4 h-4" />
                    Book a Strategy Call
                  </a>
                </Button>
              ) : (
                <Button size="lg" className="gap-2" asChild>
                  <Link href="/contact" onClick={() => track("cta_click", { cta: "book_intro", location: "hero" })}>
                    <Calendar className="w-4 h-4" />
                    Book a Strategy Call
                  </Link>
                </Button>
              )}
              {hasWA && (
                <Button variant="outline" size="lg" className="gap-2" asChild>
                  <a
                    href={WHATSAPP_URL!}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track("cta_click", { cta: "whatsapp", location: "hero" })}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Send a Message
                  </a>
                </Button>
              )}
            </div>
          </BlurFade>

          {/* Capabilities Grid */}
          <BlurFade delay={0.5}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {capabilities.map((cap) => (
                <MagicCard
                  key={cap.title}
                  className="p-4 text-left cursor-default bg-background/80 backdrop-blur"
                  gradientColor="hsl(0 0% 90%)"
                >
                  <cap.icon className="w-5 h-5 mb-2 text-muted-foreground" />
                  <h3 className="font-medium text-sm mb-1">{cap.title}</h3>
                  <p className="text-xs text-muted-foreground">{cap.desc}</p>
                </MagicCard>
              ))}
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}