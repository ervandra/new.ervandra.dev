import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { Card, CardContent } from "@/components/ui/card";
import { MagicCard } from "@/components/ui/magic-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Briefcase, 
  MapPin, 
  Calendar,
  ArrowRight,
  Code2,
  Cpu,
  Users,
  Building2,
  Zap
} from "lucide-react";

export const metadata = {
  title: "About",
  description:
    "Strategic Systems Architect with 13+ years building technology that helps businesses scale without chaos.",
};

const timeline = [
  { year: "2024-Present", role: "Founder, Product Builder", company: "KaryaKilat" },
  { year: "2017-Present", role: "Co-founder, CPTO", company: "Syntax Solution" },
  { year: "2021-2022", role: "Senior Engineer & Tech Lead", company: "R/GA" },
  { year: "2017-2020", role: "Web Application Consultant", company: "LifeLearn Holdings (Singapore)" },
  { year: "2015-2020", role: "Co-founder, Frontend Lead", company: "CIAYO Corp" },
  { year: "2012-2015", role: "Senior Web Developer", company: "CakraStudio" },
];

const skills = [
  { category: "Languages", items: ["JavaScript/TypeScript", "Node.js", "C# (.NET)", "SQL"] },
  { category: "Frontend", items: ["React", "Next.js", "Flutter", "React Native"] },
  { category: "Backend", items: ["Nest.js", "API Design", "Database Architecture"] },
  { category: "AI Tools", items: ["Cursor", "Claude", "RAG Systems", "Workflow Automation"] },
];

const principles = [
  { icon: Zap, title: "Systems over heroics", desc: "Build once, benefit forever" },
  { icon: Users, title: "Serve, don't perform", desc: "Focus on helping, not impressing" },
  { icon: Building2, title: "Ship at 80%", desc: "Perfectionism kills progress" },
  { icon: Code2, title: "Simple truths compound", desc: "Consistency beats complexity" },
];

export default function AboutPage() {
  return (
    <div className="section">
      <div className="container max-w-4xl">
        {/* Hero */}
        <BlurFade delay={0.1}>
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">About Me</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ervandra Halim
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Strategic Systems Architect & Tech Partner
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Gading Serpong, Indonesia
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                13+ Years Experience
              </span>
              <span className="flex items-center gap-1">
                <Briefcase className="w-4 h-4" />
                50+ Projects Delivered
              </span>
            </div>
          </div>
        </BlurFade>

        {/* Bio */}
        <BlurFade delay={0.2}>
          <Card className="mb-12">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">Your Tech Partner, Not Just a Vendor</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I've spent 13+ years building systems for companies across Indonesia, Singapore, 
                  USA, and Finland—from R/GA's global clients (Google, MOCA Museum, Reejig) to 
                  Indonesian startups and SMEs.
                </p>
                <p>
                  What I've learned: <span className="text-foreground font-medium">The best technology isn't the most complex.</span> It's 
                  the system that solves your specific problem and runs reliably without you.
                </p>
                <p>
                  Currently, I balance multiple strategic engagements: co-founding 
                  <strong className="text-foreground"> Syntax Solution</strong> (tech consultancy), 
                  building <strong className="text-foreground">KaryaKilat</strong> (productized microsites), 
                  and consulting for corporates and startups under NDA.
                </p>
                <p>
                  I bring first-principles thinking, disciplined change-control, and a builder's bias. 
                  Think of me as your tech partner—someone invested in your outcomes, not just deliverables.
                </p>
              </div>
            </CardContent>
          </Card>
        </BlurFade>

        {/* Principles */}
        <BlurFade delay={0.3}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Core Principles</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {principles.map((p) => (
                <MagicCard key={p.title} className="p-4 cursor-default" gradientColor="hsl(0 0% 92%)">
                  <div className="flex items-start gap-3">
                    <p.icon className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                      <h3 className="font-semibold">{p.title}</h3>
                      <p className="text-sm text-muted-foreground">{p.desc}</p>
                    </div>
                  </div>
                </MagicCard>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Timeline */}
        <BlurFade delay={0.4}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Career Journey</h2>
            <div className="space-y-4">
              {timeline.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="text-sm text-muted-foreground w-28 shrink-0">
                    {item.year}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{item.role}</div>
                    <div className="text-sm text-muted-foreground">{item.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Skills */}
        <BlurFade delay={0.5}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Technical Skills</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map((skill) => (
                <Card key={skill.category}>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{skill.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <Badge key={item} variant="secondary" className="text-xs font-normal">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </BlurFade>

        <Separator className="my-12" />

        {/* CTA */}
        <BlurFade delay={0.6}>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Want to Work Together?</h2>
            <p className="text-muted-foreground mb-6">
              Let's discuss how I can help systematize your operations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild>
                <a
                  href="https://calendly.com/ervandra"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Strategy Call
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://linkedin.com/in/ervandra"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}