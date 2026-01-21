"use client";

import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BOOK_INTRO_URL } from "@/lib/links";
import { track } from "@/lib/analytics";
import { Check, ArrowRight, X, Calendar } from "lucide-react";

const activeProjects = [
  "Co-founder & CPTO at Syntax Solution",
  "Building & growing KaryaKilat productized service",
  "NDA consulting engagements with corporates & startups",
];

const availableFor = [
  "1-2 fractional CPTO partnerships (8-12 hrs/week each)",
  "Systems audit projects (2-week engagements)",
  "AI implementation projects (scoped, project-based)",
  "Custom development for critical paths",
];

const notAvailableFor = [
  "Full-time employment",
  "24/7 support or maintenance-only contracts",
  "Pure execution without strategic input",
  "Projects requiring 40+ hours/week commitment",
  "Native mobile apps or embedded systems (not my specialty)",
];

export default function CurrentFocus() {
  const hasBook = Boolean(BOOK_INTRO_URL);

  return (
    <section id="availability" className="section bg-muted/30">
      <div className="container">
        <BlurFade delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Current Focus & Availability
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I balance multiple strategic engagements and intentionally limit my 
              availability to ensure quality delivery. Here's what I'm currently working on:
            </p>
          </div>
        </BlurFade>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {/* Active Projects */}
          <BlurFade delay={0.2}>
            <Card className="h-full">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  Active Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {activeProjects.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="w-4 h-4 mt-0.5 shrink-0 text-green-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </BlurFade>

          {/* Available For */}
          <BlurFade delay={0.3}>
            <Card className="h-full border-foreground border-2">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Available Capacity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {availableFor.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <ArrowRight className="w-4 h-4 mt-0.5 shrink-0 text-foreground" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </BlurFade>

          {/* Not Available For */}
          <BlurFade delay={0.4}>
            <Card className="h-full">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2 text-muted-foreground">
                  <X className="w-4 h-4" />
                  Not Available For
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {notAvailableFor.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <X className="w-4 h-4 mt-0.5 shrink-0 text-muted-foreground/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </BlurFade>
        </div>

        {/* Transparency Statement */}
        <BlurFade delay={0.5}>
          <div className="text-center">
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              If your needs align with my availability, let's talk.{" "}
              <span className="text-foreground font-medium">
                If I'm not the right fit, I'll tell you—and recommend alternatives.
              </span>
            </p>
            {hasBook ? (
              <Button className="gap-2" asChild>
                <a
                  href={BOOK_INTRO_URL!}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    track("cta_click", { cta: "book_intro", location: "availability" })
                  }
                >
                  <Calendar className="w-4 h-4" />
                  Book Strategy Call
                </a>
              </Button>
            ) : (
              <Button className="gap-2" asChild>
                <Link
                  href="/contact"
                  onClick={() =>
                    track("cta_click", { cta: "contact", location: "availability" })
                  }
                >
                  <Calendar className="w-4 h-4" />
                  Book Strategy Call
                </Link>
              </Button>
            )}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
