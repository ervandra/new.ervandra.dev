import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { cases } from "@/lib/cases";
import { BlurFade } from "@/components/ui/blur-fade";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Layers,
  TrendingUp,
  AlertCircle
} from "lucide-react";

export async function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = cases.find((x) => x.slug === params.slug);
  return {
    title: c ? c.title : "Case Study",
    description: c?.context,
  };
}

export default function CasePage({ params }: { params: { slug: string } }) {
  const c = cases.find((x) => x.slug === params.slug);
  if (!c) return notFound();

  const currentIndex = cases.findIndex((x) => x.slug === params.slug);
  const prevCase = currentIndex > 0 ? cases[currentIndex - 1] : null;
  const nextCase = currentIndex < cases.length - 1 ? cases[currentIndex + 1] : null;

  return (
    <div className="section">
      <div className="container max-w-3xl">
        {/* Back link */}
        <BlurFade delay={0.1}>
          <Link 
            href="/cases" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Case Studies
          </Link>
        </BlurFade>

        {/* Header */}
        <BlurFade delay={0.15}>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{c.title}</h1>
          <p className="text-lg text-muted-foreground mb-6">{c.context}</p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            {c.timeline && (
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span>{c.timeline}</span>
              </div>
            )}
            {c.stack && (
              <div className="flex flex-wrap gap-2">
                {c.stack.map((s) => (
                  <Badge key={s} variant="secondary" className="text-xs font-normal">{s}</Badge>
                ))}
              </div>
            )}
          </div>
        </BlurFade>

        {/* Problem */}
        {c.problem && (
          <BlurFade delay={0.2}>
            <Card className="mb-6 border-l-4 border-l-foreground">
              <CardContent className="p-6">
                <h2 className="font-semibold mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  Problem
                </h2>
                <p className="text-muted-foreground">{c.problem}</p>
              </CardContent>
            </Card>
          </BlurFade>
        )}

        {/* Intervention */}
        {c.intervention && (
          <BlurFade delay={0.25}>
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="font-semibold mb-2 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  Intervention
                </h2>
                <p className="text-muted-foreground">{c.intervention}</p>
              </CardContent>
            </Card>
          </BlurFade>
        )}

        {/* Highlights */}
        {c.highlights && (
          <BlurFade delay={0.3}>
            <div className="mb-6">
              <h2 className="font-semibold mb-4">Solution Highlights</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {c.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
        )}

        {/* Outcome */}
        {c.outcome && (
          <BlurFade delay={0.35}>
            <Card className="mb-6 bg-muted/30">
              <CardContent className="p-6">
                <h2 className="font-semibold mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Outcomes
                </h2>
                <div className="flex flex-wrap gap-3">
                  {c.outcome.map((o) => (
                    <Badge key={o} variant="outline" className="font-normal">
                      {o}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </BlurFade>
        )}

        {/* What's Next */}
        {c.next && (
          <BlurFade delay={0.4}>
            <div className="mb-8">
              <h2 className="font-semibold mb-2">What's Next</h2>
              <p className="text-muted-foreground">{c.next}</p>
            </div>
          </BlurFade>
        )}

        <Separator className="my-8" />

        {/* Navigation */}
        <BlurFade delay={0.45}>
          <div className="flex justify-between items-center mb-8">
            {prevCase ? (
              <Link 
                href={`/cases/${prevCase.slug}` as "/cases/integrated-ai-assisted-workflow" | "/cases/ai-guardrails-implementation" | "/cases/tailored-critical-path-build"}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </Link>
            ) : <div />}
            {nextCase ? (
              <Link 
                href={`/cases/${nextCase.slug}` as "/cases/integrated-ai-assisted-workflow" | "/cases/ai-guardrails-implementation" | "/cases/tailored-critical-path-build"}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : <div />}
          </div>
        </BlurFade>

        {/* CTA */}
        <BlurFade delay={0.5}>
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Have a Similar Challenge?</h3>
              <p className="text-muted-foreground mb-4">
                Let's discuss how I can help systematize your operations.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button asChild>
                  <Link href="/contact">
                    Book a Strategy Call
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </BlurFade>
      </div>
    </div>
  );
}