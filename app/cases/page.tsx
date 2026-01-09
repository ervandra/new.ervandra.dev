import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MagicCard } from "@/components/ui/magic-card";
import { cases } from "@/lib/cases";
import { ArrowRight, Folder } from "lucide-react";

export const metadata = {
  title: "Case Studies",
  description: "Real projects showing context, constraints, solutions, and outcomes.",
};

export default function CasesPage() {
  return (
    <div className="section">
      <div className="container">
        {/* Header */}
        <BlurFade delay={0.1}>
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Case Studies</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Work That Speaks
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real projects with real outcomes. See how I've helped businesses 
              systematize operations and scale without chaos.
            </p>
          </div>
        </BlurFade>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cases.map((c, idx) => (
            <BlurFade key={c.slug} delay={0.1 + idx * 0.1}>
              <MagicCard className="h-full p-6 cursor-default" gradientColor="hsl(0 0% 92%)">
                <div className="flex flex-col h-full">
                  <Folder className="w-6 h-6 mb-3 text-muted-foreground" />
                  <h3 className="text-lg font-semibold leading-snug mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{c.context}</p>
                  
                  {c.outcome && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {c.outcome.map((o) => (
                        <Badge key={o} variant="secondary" className="text-xs font-normal">
                          {o}
                        </Badge>
                      ))}
                    </div>
                  )}
                  
                  <Link 
                    href={`/cases/${c.slug}` as "/cases/integrated-ai-assisted-workflow" | "/cases/ai-guardrails-implementation" | "/cases/tailored-critical-path-build"}
                    className="inline-flex items-center gap-1 text-sm font-medium hover:underline underline-offset-4"
                  >
                    Read full case
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>

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
                    <Link href="/contact">
                      Start a Conversation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/testimonials">See What Others Say</Link>
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