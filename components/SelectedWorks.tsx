"use client";

import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cases } from "@/lib/cases";
import { ArrowRight, Building2, Rocket, Users, Globe } from "lucide-react";

const clientTypeIcons: Record<string, React.ElementType> = {
  corporate: Building2,
  startup: Rocket,
  sme: Users,
  agency: Globe,
  individual: Users,
  product: Globe,
};

export default function SelectedWorks() {
  // Get featured cases for homepage
  const featuredCases = cases.filter((c) => c.featured).slice(0, 4);

  return (
    <section id="work" className="section bg-muted/30">
      <div className="container">
        <BlurFade delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Work & Impact</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real projects with measurable outcomes. From Singapore SaaS to Indonesian enterprises,
              here's how I've helped businesses build systems that work.
            </p>
          </div>
        </BlurFade>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
          {featuredCases.map((caseItem, idx) => {
            const Icon = clientTypeIcons[caseItem.clientType || "startup"] || Rocket;
            return (
              <BlurFade key={caseItem.slug} delay={0.1 + idx * 0.1}>
                <MagicCard
                  className="p-6 h-full cursor-default bg-background"
                  gradientColor="hsl(0 0% 92%)"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base leading-tight">
                        {caseItem.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {caseItem.timeline}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {caseItem.context}
                  </p>

                  {/* Key Outcomes */}
                  {caseItem.outcome && (
                    <div className="space-y-1.5">
                      {caseItem.outcome.slice(0, 2).map((outcome, i) => (
                        <div
                          key={i}
                          className="text-xs text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-foreground font-medium">•</span>
                          {outcome}
                        </div>
                      ))}
                    </div>
                  )}
                </MagicCard>
              </BlurFade>
            );
          })}
        </div>

        {/* Companies Logo Bar */}
        <BlurFade delay={0.5}>
          <Card className="mb-8 border-dashed">
            <CardContent className="p-6">
              <p className="text-center text-sm text-muted-foreground mb-4">
                Organizations I've Worked With
              </p>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-muted-foreground">
                {["R/GA", "LifeLearn", "Syntax", "Komunal", "MTF", "CIAYO", "DDTC", "Paper.id"].map(
                  (company) => (
                    <span key={company} className="text-sm font-medium hover:text-foreground transition-colors">
                      {company}
                    </span>
                  )
                )}
              </div>
            </CardContent>
          </Card>
        </BlurFade>

        <BlurFade delay={0.6}>
          <div className="text-center">
            <Button variant="outline" className="gap-2" asChild>
              <Link href="/cases">
                View All Case Studies
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

