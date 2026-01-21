import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MagicCard } from "@/components/ui/magic-card";
import { cases } from "@/lib/cases";
import { ArrowRight, Building2, Rocket, Users, Globe, Star } from "lucide-react";

export const metadata = {
  title: "Case Studies",
  description: "Real projects with measurable outcomes. From Singapore SaaS to Indonesian enterprises.",
};

const clientTypeIcons: Record<string, React.ElementType> = {
  corporate: Building2,
  startup: Rocket,
  sme: Users,
  agency: Globe,
  individual: Users,
  product: Globe,
};

export default function CasesPage() {
  const featuredCases = cases.filter((c) => c.featured);
  const otherCases = cases.filter((c) => !c.featured);

  return (
    <div className="section">
      <div className="container">
        {/* Header */}
        <BlurFade delay={0.1}>
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Case Studies</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Work & Impact
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real projects with measurable outcomes. From Singapore SaaS to Indonesian enterprises,
              here's how I've helped businesses build systems that work.
            </p>
          </div>
        </BlurFade>

        {/* Featured Cases */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featuredCases.map((c, idx) => {
            const Icon = clientTypeIcons[c.clientType || "startup"] || Rocket;
            return (
              <BlurFade key={c.slug} delay={0.1 + idx * 0.05}>
                <MagicCard className="h-full p-6 cursor-default" gradientColor="hsl(0 0% 92%)">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-semibold leading-snug">{c.title}</h3>
                          {c.featured && <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />}
                        </div>
                        <p className="text-xs text-muted-foreground">{c.timeline}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">{c.context}</p>
                    
                    {/* Problem & Intervention */}
                    {c.problem && (
                      <div className="mb-4">
                        <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">Challenge</p>
                        <p className="text-sm text-muted-foreground line-clamp-2">{c.problem}</p>
                      </div>
                    )}
                    
                    {/* Outcomes */}
                    {c.outcome && (
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">Key Outcomes</p>
                        <div className="space-y-1">
                          {c.outcome.slice(0, 3).map((o, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm">
                              <span className="text-foreground font-medium">•</span>
                              <span className="text-muted-foreground">{o}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Stack */}
                    {c.stack && (
                      <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border">
                        {c.stack.slice(0, 5).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs font-normal">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </MagicCard>
              </BlurFade>
            );
          })}
        </div>

        {/* Other Cases */}
        {otherCases.length > 0 && (
          <BlurFade delay={0.3}>
            <div className="mb-12">
              <h2 className="text-xl font-semibold mb-6 text-center">Other Projects</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {otherCases.map((c) => {
                  const Icon = clientTypeIcons[c.clientType || "startup"] || Rocket;
                  return (
                    <Card key={c.slug}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <Icon className="w-5 h-5 text-muted-foreground mt-0.5" />
                          <div>
                            <h3 className="font-medium text-sm mb-1">{c.title}</h3>
                            <p className="text-xs text-muted-foreground line-clamp-2">{c.context}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </BlurFade>
        )}

        {/* CTA */}
        <BlurFade delay={0.5}>
          <div className="text-center">
            <Card className="inline-block">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Have a Similar Challenge?</h2>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Let's discuss how we can apply these patterns to your business.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button asChild>
                    <a
                      href="https://calendly.com/ervandra"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book Strategy Call
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/services">View Services</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}