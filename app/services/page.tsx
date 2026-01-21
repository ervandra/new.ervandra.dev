import Link from "next/link";
import Script from "next/script";
import { BlurFade } from "@/components/ui/blur-fade";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MagicCard } from "@/components/ui/magic-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Globe,
  Bot,
  BarChart3,
  Users,
  Cpu,
  Code2,
  GraduationCap,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Clock,
  Target
} from "lucide-react";

export const metadata = {
  title: "Services",
  description:
    "Strategic Systems Design, AI Enablement, Custom Development, and Fractional CPTO services. From productized solutions to strategic partnerships.",
};

const productizedSolutions = [
  {
    icon: Globe,
    title: "Professional Microsites",
    tagline: "via KaryaKilat.com",
    description: "Premium websites for insurance agents, property agents, freelancers & SMEs—live in 24 hours. No coding, no hassle. Mobile-optimized, SEO-ready, lead capture built-in.",
    cta: "Visit KaryaKilat.com",
    href: "https://karyakilat.com",
    external: true,
    available: true,
    features: [
      "24-hour delivery guarantee",
      "Mobile-first, SEO-optimized",
      "WhatsApp lead capture",
      "Hosting & SSL included",
    ],
  },
  {
    icon: Bot,
    title: "AI Follow-Up Automation",
    tagline: "Coming Soon",
    description: "AI that follows up with your leads while you sleep. Trained on your knowledge base, answers 24/7. Perfect for agents and sales professionals who can't be everywhere.",
    cta: "Join Waitlist",
    href: "/contact?interest=ai-automation",
    external: false,
    available: false,
    features: [
      "Trained on your products/services",
      "24/7 lead qualification",
      "WhatsApp & web chat",
      "Human handoff when needed",
    ],
  },
];

const strategicServices = [
  {
    icon: BarChart3,
    title: "Systems Audit & Design",
    price: "IDR 5M",
    period: "2-week engagement",
    description: "Deep dive into your operations and tech bottlenecks. You get: operations map, gap analysis, architecture plan, and 90-day implementation roadmap.",
    features: [
      "Full operations review",
      "Technology assessment",
      "Gap analysis report",
      "Prioritized action plan",
      "90-day roadmap",
    ],
    ideal: "Before major tech investments",
    popular: true,
  },
  {
    icon: Users,
    title: "Fractional CPTO",
    price: "IDR 15M",
    period: "/month (8-12 hrs/week)",
    description: "Part-time tech leadership without full-time cost. Strategy, architecture, team oversight, vendor management. Limited slots available.",
    features: [
      "Monthly strategy sessions",
      "Architecture decisions",
      "Team mentoring",
      "Vendor negotiations",
      "Unlimited async support",
    ],
    ideal: "Growing without a tech co-founder",
    popular: false,
  },
  {
    icon: Cpu,
    title: "Custom AI Implementation",
    price: "Starting IDR 10M",
    period: "project-based",
    description: "Custom AI agents, workflow automation, RAG pipelines. Discovery → Proof of concept → Full implementation.",
    features: [
      "AI opportunity assessment",
      "Privacy-aware implementation",
      "Measurable ROI tracking",
      "Maintainable systems",
    ],
    ideal: "Repetitive tasks draining your team",
    popular: false,
  },
  {
    icon: Code2,
    title: "Custom Development",
    price: "IDR 25M+",
    period: "project-based",
    description: "Ship the critical path. Web apps, integrations, internal tools, and dashboards with change-control discipline.",
    features: [
      "Tight scope definition",
      "Clean interfaces",
      "Strong acceptance tests",
      "Predictable delivery",
    ],
    ideal: "Specific bottleneck to solve",
    popular: false,
  },
];

export default function ServicesPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Strategic Systems Architecture",
    provider: {
      "@type": "Person",
      name: "Ervandra Halim",
      url: "https://www.ervandra.dev",
    },
    areaServed: "Global",
    serviceType: ["Advisory & Architecture", "Tailored Development", "AI Enablement", "Productized Microsites"],
    url: "https://www.ervandra.dev/services",
  };

  return (
    <div className="section">
      <div className="container">
        {/* Header */}
        <BlurFade delay={0.1}>
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              How I Can Help You
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From ready-made productized solutions to strategic partnerships.
              Every engagement starts with understanding your specific needs.
            </p>
          </div>
        </BlurFade>

        {/* Tier 1: Productized Solutions */}
        <BlurFade delay={0.2}>
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Productized Solutions</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Ready-made solutions for common business needs. Perfect for agents, 
                freelancers, and SMEs who need results quickly.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {productizedSolutions.map((solution) => (
                <Card 
                  key={solution.title} 
                  className={`relative h-full ${!solution.available ? "opacity-80" : ""}`}
                >
                  {!solution.available && (
                    <div className="absolute top-4 right-4 px-2 py-1 bg-muted text-xs font-medium rounded-full flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Coming Soon
                    </div>
                  )}
                  <CardHeader>
                    <solution.icon className="w-10 h-10 mb-3 text-muted-foreground" />
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                    <CardDescription className="text-xs font-medium text-foreground/60">
                      {solution.tagline}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col h-full">
                    <p className="text-sm text-muted-foreground mb-4">
                      {solution.description}
                    </p>
                    <ul className="space-y-2 mb-6 flex-1">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-muted-foreground" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant={solution.available ? "default" : "outline"} 
                      className="w-full gap-2" 
                      asChild
                    >
                      {solution.external ? (
                        <a
                          href={solution.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {solution.cta}
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        <Link href={solution.href as any}>
                          {solution.cta}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </BlurFade>

        <Separator className="my-12" />

        {/* Tier 2: Strategic Partnerships */}
        <BlurFade delay={0.3}>
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Strategic Partnerships</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Ongoing or project-based engagements where I become your strategic tech partner.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {strategicServices.map((service, idx) => (
                <MagicCard 
                  key={service.title} 
                  className={`relative p-6 h-full cursor-default ${service.popular ? "border-foreground border-2" : ""}`}
                  gradientColor="hsl(0 0% 92%)"
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-foreground text-background text-xs font-medium rounded-full">
                      Start Here
                    </div>
                  )}
                  <div className="flex flex-col h-full">
                    <service.icon className="w-8 h-8 mb-4 text-muted-foreground" />
                    <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
                    <div className="mb-3">
                      <span className="text-2xl font-bold">{service.price}</span>
                      <span className="text-sm text-muted-foreground ml-1">{service.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                    
                    <ul className="space-y-2 mb-4 flex-1">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center gap-1 text-xs text-muted-foreground pt-4 border-t border-border">
                      <Target className="w-3 h-3" />
                      Ideal for: {service.ideal}
                    </div>
                  </div>
                </MagicCard>
              ))}
            </div>
          </div>
        </BlurFade>

        <Separator className="my-12" />

        {/* Tier 3: Mentorship */}
        <BlurFade delay={0.4}>
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Mentorship</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                For peers and junior technologists seeking guidance on technical growth.
              </p>
            </div>
            <Card className="max-w-2xl mx-auto border-dashed">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-semibold mb-2">1-on-1 Mentorship</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Guidance for developers, PMs, and aspiring tech leaders on technical growth, 
                      career navigation, or product building. Topics include career acceleration, 
                      developer fundamentals, AI-driven tech landscape, and personal branding.
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      Limited slots, application required. Investment discussed case-by-case.
                    </p>
                  </div>
                  <div className="shrink-0">
                    <Button variant="outline" className="gap-2" asChild>
                      <Link href="/contact?interest=mentorship">
                        Apply for Mentorship
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </BlurFade>

        {/* Not Sure CTA */}
        <BlurFade delay={0.5}>
          <div className="text-center">
            <Card className="inline-block">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Not Sure Which Fits?</h2>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Start with a free 45-minute strategy call. I'll help you determine 
                  the best approach—whether that's one of my services, a different 
                  provider, or a DIY path with resources I can recommend.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button asChild>
                    <a
                      href="https://calendly.com/ervandra"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Schedule Free Strategy Call
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/cases">See Past Work</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </BlurFade>
      </div>
      <Script
        id="jsonld-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
    </div>
  );
}