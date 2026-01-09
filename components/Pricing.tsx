"use client";

import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BOOK_INTRO_URL } from "@/lib/links";
import { track } from "@/lib/analytics";
import { Check, ArrowRight } from "lucide-react";

const packages = [
  {
    name: "Strategy Call",
    price: "Free",
    period: "",
    description: "45-minute discovery call to understand your challenges and explore solutions.",
    features: [
      "Current state assessment",
      "Quick wins identification",
      "Roadmap recommendations",
      "No commitment required",
    ],
    cta: "Book Free Call",
    popular: false,
  },
  {
    name: "Systems Audit",
    price: "IDR 5M",
    period: "one-time",
    description: "Deep dive into your operations. Get a clear picture of what's working and what needs fixing.",
    features: [
      "Full operations review",
      "Technology assessment",
      "Gap analysis report",
      "Prioritized action plan",
      "90-day roadmap",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Fractional CPTO",
    price: "IDR 15M",
    period: "/month",
    description: "Ongoing strategic tech leadership without the full-time commitment.",
    features: [
      "Monthly strategy sessions",
      "Architecture decisions",
      "Team mentoring",
      "Vendor negotiations",
      "Unlimited async support",
    ],
    cta: "Let's Talk",
    popular: false,
  },
];

export default function Pricing() {
  const hasBook = Boolean(BOOK_INTRO_URL);

  return (
    <section className="section">
      <div className="container">
        <BlurFade delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Clear Pricing, Real Value</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transparent packages designed for different stages of your journey. 
              Every engagement starts with understanding your specific needs.
            </p>
          </div>
        </BlurFade>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, idx) => (
            <BlurFade key={pkg.name} delay={0.1 + idx * 0.1}>
              <Card className={`relative h-full flex flex-col ${pkg.popular ? "border-foreground border-2" : ""}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-foreground text-background text-xs font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-lg">{pkg.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">{pkg.price}</span>
                    {pkg.period && <span className="text-muted-foreground text-sm">{pkg.period}</span>}
                  </div>
                  <CardDescription className="mt-2">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 flex-1">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    {hasBook ? (
                      <Button 
                        className="w-full" 
                        variant={pkg.popular ? "default" : "outline"}
                        asChild
                      >
                        <a
                          href={BOOK_INTRO_URL!}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => track("cta_click", { cta: "pricing", package: pkg.name })}
                        >
                          {pkg.cta}
                        </a>
                      </Button>
                    ) : (
                      <Button 
                        className="w-full" 
                        variant={pkg.popular ? "default" : "outline"}
                        asChild
                      >
                        <Link href="/contact" onClick={() => track("cta_click", { cta: "pricing", package: pkg.name })}>
                          {pkg.cta}
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
