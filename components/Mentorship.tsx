"use client";

import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Sparkles, Users, ArrowRight } from "lucide-react";

const mentorshipAreas = [
  "Career acceleration for tech professionals",
  "Building stronger developer fundamentals", 
  "Navigating the AI-driven tech landscape",
  "Personal branding for freelancers & creatives",
];

export default function Mentorship() {
  return (
    <section className="section">
      <div className="container">
        <BlurFade delay={0.1}>
          <Card className="border-dashed">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Icon */}
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-muted-foreground" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-2">
                    Mentorship & Coaching
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Beyond client work, I offer mentorship to nurture young freelancers, programmers, 
                    and creatives. Empowering the next generation to master their craft and navigate 
                    the future of tech.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {mentorshipAreas.map((area) => (
                      <span 
                        key={area}
                        className="inline-flex items-center gap-1 text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                      >
                        <Sparkles className="w-3 h-3" />
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="shrink-0">
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <Link href="/contact">
                      Learn More
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </BlurFade>
      </div>
    </section>
  );
}
