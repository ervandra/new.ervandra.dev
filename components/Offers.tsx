"use client";

import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { KARYAKILAT_URL, BOOK_INTRO_URL } from "@/lib/links";
import { track } from "@/lib/analytics";
import { 
  Globe, 
  Bot, 
  BarChart3, 
  Users, 
  Cpu, 
  GraduationCap,
  ArrowRight,
  ExternalLink,
  Clock
} from "lucide-react";

const productizedSolutions = [
  {
    icon: Globe,
    title: "Professional Microsites",
    description: "Premium websites for agents, freelancers & SMEs—live in 24 hours. No coding, no hassle.",
    cta: "Visit KaryaKilat.com",
    href: KARYAKILAT_URL,
    external: true,
    available: true,
  },
  {
    icon: Bot,
    title: "AI Follow-Up Automation",
    description: "AI that follows up with your leads while you sleep. Trained on your knowledge base, answers 24/7.",
    cta: "Join Waitlist",
    href: "/contact?interest=ai-automation",
    external: false,
    available: false,
  },
] as const;

const strategicServices = [
  {
    icon: BarChart3,
    title: "Systems Audit & Design",
    price: "IDR 5M",
    period: "2-week engagement",
    description: "Deep dive into your operations and tech bottlenecks. Get operations map, gap analysis, architecture plan, and 90-day roadmap.",
  },
  {
    icon: Users,
    title: "Fractional CPTO",
    price: "IDR 15M",
    period: "/month",
    description: "Part-time tech leadership without full-time cost. Strategy, architecture, team oversight, vendor management.",
  },
  {
    icon: Cpu,
    title: "Custom AI Implementation",
    price: "Starting IDR 10M",
    period: "project-based",
    description: "Custom AI agents, workflow automation, RAG pipelines. Discovery → Proof of concept → Full implementation.",
  },
] as const;

export default function Offers(): JSX.Element {
  const hasBook = Boolean(BOOK_INTRO_URL);

  return (
    <section id="services" className="section">
      <div className="container">
        <BlurFade delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How I Can Help You</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From ready-made productized solutions to strategic partnerships. 
              Every engagement starts with understanding your specific needs.
            </p>
          </div>
        </BlurFade>

        {/* Tier 1: Productized Solutions */}
        <BlurFade delay={0.2}>
          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-2 text-center">
              Productized Solutions
            </h3>
            <p className="text-sm text-muted-foreground text-center mb-6">
              Ready-made solutions for common business needs. Perfect for agents, freelancers, and SMEs who need results quickly.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {productizedSolutions.map((solution) => (
                <Card 
                  key={solution.title} 
                  className={`relative ${!solution.available ? "opacity-70" : ""}`}
                >
                  {!solution.available && (
                    <div className="absolute top-3 right-3 px-2 py-1 bg-muted text-xs font-medium rounded-full flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Coming Soon
                    </div>
                  )}
                  <CardHeader className="pb-3">
                    <solution.icon className="w-8 h-8 mb-2 text-muted-foreground" />
                    <CardTitle className="text-lg">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {solution.description}
                    </p>
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      {solution.external ? (
                        <a
                          href={solution.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          {...(solution.available && {
                            onClick: () => track("cta_click", { cta: "karyakilat", location: "offers" })
                          })}
                        >
                          {solution.cta}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <Link href={solution.href}>
                          {solution.cta}
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Tier 2: Strategic Partnerships */}
        <BlurFade delay={0.3}>
          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-2 text-center">
              Strategic Partnerships
            </h3>
            <p className="text-sm text-muted-foreground text-center mb-6">
              Ongoing or project-based engagements where I become your strategic tech partner.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {strategicServices.map((service, idx) => (
                <Card key={service.title} className={`relative ${idx === 0 ? "border-foreground border-2" : ""}`}>
                  {idx === 0 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-foreground text-background text-xs font-medium rounded-full">
                      Start Here
                    </div>
                  )}
                  <CardHeader className="pb-3">
                    <service.icon className="w-6 h-6 mb-2 text-muted-foreground" />
                    <CardTitle className="text-base">{service.title}</CardTitle>
                    <div className="mt-1">
                      <span className="text-xl font-bold">{service.price}</span>
                      <span className="text-xs text-muted-foreground ml-1">{service.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Tier 3: Mentorship */}
        <BlurFade delay={0.4}>
          <div className="mb-8">
            <Card className="max-w-2xl mx-auto border-dashed">
              <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-muted-foreground" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-semibold mb-1">1-on-1 Mentorship</h3>
                  <p className="text-sm text-muted-foreground">
                    Guidance for developers, PMs, and aspiring tech leaders on technical growth, 
                    career, or product building. Limited slots, application required.
                  </p>
                </div>
                <div className="shrink-0">
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <Link href="/contact?interest=mentorship">
                      Apply
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </BlurFade>

        {/* Not Sure CTA */}
        <BlurFade delay={0.5}>
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Not sure which fits? Start with a free 45-minute strategy call.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {hasBook ? (
                <Button className="gap-2" asChild>
                  <a
                    href={BOOK_INTRO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track("cta_click", { cta: "book_intro", location: "offers" })}
                  >
                    Schedule Free Strategy Call
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              ) : (
                <Button className="gap-2" asChild>
                  <Link href="/contact">
                    Schedule Strategy Call
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              )}
              <Button variant="outline" className="gap-2" asChild>
                <Link href="/services">
                  View All Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}