"use client";

import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { Layers, Cpu, Code2, Users } from "lucide-react";

const services = [
  {
    icon: Layers,
    name: "Strategic Systems Design",
    description: "Diagnose bottlenecks, design scalable architectures, and map clear operational paths that balance ambition with constraints.",
    href: "/services",
    cta: "Learn more",
    className: "md:col-span-2",
  },
  {
    icon: Cpu,
    name: "AI Enablement",
    description: "Practical AI solutions. From RAG pipelines to custom agents—integrating intelligence where it adds real value, not just hype.",
    href: "/services",
    cta: "Learn more",
    className: "md:col-span-1",
  },
  {
    icon: Code2,
    name: "Custom Development",
    description: "Building the critical path. High-performance web apps, internal tools, and dashboards delivered with engineering rigor.",
    href: "/services",
    cta: "Learn more",
    className: "md:col-span-1",
  },
  {
    icon: Users,
    name: "Fractional CPTO",
    description: "Your technical partner. On-demand strategic leadership, architecture review, and roadmap planning for growing teams.",
    href: "/services",
    cta: "Learn more",
    className: "md:col-span-2",
  },
];

export default function Offers() {
  return (
    <section className="section">
      <div className="container">
        <BlurFade delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How I Can Help You</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tailored solutions for Corporates, Startups, SMEs, and Individuals. 
              Building systems that work while you focus on what matters.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.2}>
          <BentoGrid className="md:grid-cols-3 auto-rows-[18rem]">
            {services.map((service) => (
              <BentoCard
                key={service.name}
                name={service.name}
                className={service.className}
                Icon={service.icon}
                description={service.description}
                href={service.href}
                cta={service.cta}
                background={<div className="absolute inset-0 bg-gradient-to-br from-muted/20 to-transparent" />}
              />
            ))}
          </BentoGrid>
        </BlurFade>

        <BlurFade delay={0.3}>
          <div className="text-center mt-8">
            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
            >
              View all services and pricing
            </Link>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}