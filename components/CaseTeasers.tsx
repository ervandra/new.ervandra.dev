"use client";

import Link from 'next/link';
import { cases } from '@/lib/cases';
import { BlurFade } from '@/components/ui/blur-fade';
import { MagicCard } from '@/components/ui/magic-card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const projectTypeLabels: Record<string, string> = {
  "web-app": "Web App",
  "mobile-app": "Mobile App", 
  "fullstack": "Fullstack",
  "ai-system": "AI System",
  "enterprise": "Enterprise",
};

export default function CaseTeasers() {
  return (
    <section className="section">
      <div className="container">
        <BlurFade delay={0.1}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">Case Studies</h2>
              <p className="text-muted-foreground text-sm mt-1">
                Real projects across corporates, startups, and SMEs
              </p>
            </div>
            <Link 
              href="/cases" 
              className="inline-flex items-center gap-1 text-sm font-medium hover:underline underline-offset-4"
            >
              View all projects
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </BlurFade>
        
        <div className="grid md:grid-cols-3 gap-6">
          {cases.slice(0, 3).map((c, idx) => (
            <BlurFade key={c.slug} delay={0.1 + idx * 0.1}>
              <MagicCard className="p-6 h-full cursor-default" gradientColor="hsl(0 0% 90%)">
                <div className="flex flex-col h-full">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {c.projectType && (
                      <Badge variant="secondary" className="text-xs">
                        {projectTypeLabels[c.projectType] || c.projectType}
                      </Badge>
                    )}
                    {c.clientType && (
                      <Badge variant="outline" className="text-xs capitalize">
                        {c.clientType}
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground flex-1">{c.context}</p>
                  <Link 
                    className="inline-flex items-center gap-1 text-sm font-medium mt-4 hover:underline underline-offset-4" 
                    href={`/cases/${c.slug}`}
                  >
                    Read case
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}