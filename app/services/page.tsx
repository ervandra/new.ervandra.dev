import Link from "next/link";
import Script from "next/script";
import { BlurFade } from "@/components/ui/blur-fade";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MagicCard } from "@/components/ui/magic-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Layers, 
  Cpu, 
  Code2, 
  Users,
  ArrowRight,
  CheckCircle2,
  Clock,
  Target
} from "lucide-react";

export const metadata = {
  title: "Services",
  description:
    "Strategic Systems Design, AI Enablement, Custom Development, and Fractional CPTO services for businesses ready to scale.",
};

const services = [
  {
    icon: Layers,
    title: "Strategic Systems Design",
    description: "Diagnose your current state, define a clear target, and chart a path that balances ambition with constraints.",
    deliverables: [
      "Capability & process mapping",
      "Technology assessment",
      "Phased roadmap",
      "Decision frameworks",
    ],
    timeline: "2-4 weeks",
    ideal: "Before major tech investments",
  },
  {
    icon: Cpu,
    title: "AI Enablement & Automation",
    description: "Inject practical AI where it compounds: data pipelines, RAG systems, assistants, and workflow automation.",
    deliverables: [
      "AI opportunity assessment",
      "Privacy-aware implementation",
      "Measurable ROI tracking",
      "Maintainable systems",
    ],
    timeline: "4-8 weeks",
    ideal: "Repetitive tasks draining your team",
  },
  {
    icon: Code2,
    title: "Custom Development",
    description: "Ship the critical path. Web apps, integrations, internal tools, and dashboards with change-control discipline.",
    deliverables: [
      "Tight scope definition",
      "Clean interfaces",
      "Strong acceptance tests",
      "Predictable delivery",
    ],
    timeline: "4-12 weeks",
    ideal: "Specific bottleneck to solve",
  },
  {
    icon: Users,
    title: "Fractional CPTO",
    description: "Ongoing strategic tech leadership without the full-time commitment. Your tech advisor on speed dial.",
    deliverables: [
      "Monthly strategy sessions",
      "Architecture decisions",
      "Team mentoring",
      "Vendor negotiations",
    ],
    timeline: "Ongoing monthly",
    ideal: "Growing without a tech co-founder",
  },
];

const engagements = [
  { name: "Strategy Call", duration: "45 min", price: "Free", desc: "Discovery and quick-win identification" },
  { name: "Diagnostic Sprint", duration: "1-2 weeks", price: "IDR 5-10M", desc: "Deep audit with actionable roadmap" },
  { name: "Build Sprint", duration: "4-8 weeks", price: "IDR 25-50M", desc: "Fixed-scope development with milestones" },
  { name: "Fractional CPTO", duration: "Monthly", price: "IDR 15-25M/mo", desc: "Ongoing advisory + execution support" },
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
    serviceType: ["Advisory & Architecture", "Tailored Development", "AI Enablement"],
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
              Services designed for agents, business owners, and entrepreneurs who want 
              systems that work while they focus on what matters.
            </p>
          </div>
        </BlurFade>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {services.map((service, idx) => (
            <BlurFade key={service.title} delay={0.1 + idx * 0.1}>
              <MagicCard className="p-6 h-full cursor-default" gradientColor="hsl(0 0% 92%)">
                <div className="flex flex-col h-full">
                  <service.icon className="w-8 h-8 mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  
                  <div className="space-y-4 flex-1">
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Deliverables:</h4>
                      <ul className="space-y-1">
                        {service.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 pt-4 mt-4 border-t border-border">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {service.timeline}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Target className="w-3 h-3" />
                      {service.ideal}
                    </div>
                  </div>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>

        {/* Engagement Models */}
        <BlurFade delay={0.5}>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Engagement Models</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {engagements.map((e, idx) => (
                <Card key={e.name} className={idx === 1 ? "border-foreground border-2" : ""}>
                  <CardContent className="p-4 text-center">
                    <h3 className="font-semibold mb-1">{e.name}</h3>
                    <p className="text-2xl font-bold mb-1">{e.price}</p>
                    <p className="text-xs text-muted-foreground mb-2">{e.duration}</p>
                    <p className="text-sm text-muted-foreground">{e.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* CTA */}
        <BlurFade delay={0.6}>
          <div className="text-center">
            <Card className="inline-block">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Every engagement starts with a free strategy call. 
                  Let's discuss your challenges and explore solutions.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button asChild>
                    <Link href="/contact">
                      Book Free Strategy Call
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
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