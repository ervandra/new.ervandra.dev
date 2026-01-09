import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { Card, CardContent } from "@/components/ui/card";
import { MagicCard } from "@/components/ui/magic-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Marquee } from "@/components/ui/marquee";
import { Quote, ArrowRight, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Testimonials",
  description: "What partners and clients say about working with Ervandra Halim.",
};

const testimonials = [
  {
    text: "When I first meet Ervan, I know he will be a leader in engineering team someday. And it is happening now, I'm moving from R/GA and now Ervan replacing me to lead a world-class team in R/GA. As an engineer, Ervan's skill is no doubt. He delivers world-class technology solution for clients and working with people from around the globe. As a person, Ervan's is a very responsible person and have a very good communication and writing skill.",
    name: "David Alfa Sunarna",
    role: "Associate Technology Director",
    company: "R/GA",
  },
  {
    text: "When I was at R/GA Ervan helps me a lot when doing things, I never find it difficult to work with him and he was always on time for delivery. He knew the principle when doing the work and always questioned what we could improve in the future. His technical skills in front-end development are unquestionable, I can trust him to deliver without any supervision whatsoever, and he's a dedicated person.",
    name: "Eko Purnomo",
    role: "VP of Technology",
    company: "Komunal Indonesia",
  },
  {
    text: "Ervandra is an extraordinary software engineer, he always comes with a great solution, practical and impactful for any result of his project. You will find 'engineering thinking' lives on this very talented guy, not only on his work but also on every process that he takes.",
    name: "Donny Riantori",
    role: "VP Engineering",
    company: "DDTC",
  },
  {
    text: "If you're looking for a versatile frontend web developer I'll definitely recommend Ervandra right away. Several qualities of him that I could easily recommend are: Open minded, critical thinking, resourceful and always look for improvement. He's always work really hard to improve and expand his knowledge.",
    name: "Erick Liemarga",
    role: "Chief Product Officer",
    company: "LABABOOK",
  },
  {
    text: "Ervandra is a very special person for us. He always overdeliver his services, even without being asked. He saved us multiple times due to our primitive and outdated backend system, he provides quick and working solutions. Indeed, our most valuable person regarding technology, especially web applications and technology solutions.",
    name: "Jussi Hurmola",
    role: "CEO",
    company: "LifeLearn Holdings",
  },
  {
    text: "I've been working with Ervandra in CIAYO Comics for over 2 years and I was amazed by Ervandra's skill in front end web developer. He is a highly focused person as well as analytical and can add to any team he is a part of. His energy to make things happen was contagious and it helped us achieve great goals.",
    name: "Effene Henry",
    role: "Lead Squad Engineer",
    company: "Paper.id",
  },
  {
    text: "Ervandra is my teammate at CIAYO, he is a great developer. He is like a witch, because he can bring delightful experiences and interactions to the UI, his work always amazes me. One of the best front end web developers I know. It was my pleasure to have worked with him.",
    name: "Fran Sisco",
    role: "Android Developer",
    company: "Bank MNC International",
  },
];

const TestimonialCard = ({ t }: { t: typeof testimonials[0] }) => (
  <MagicCard className="w-[380px] mx-3 p-5 cursor-default" gradientColor="hsl(0 0% 92%)">
    <Quote className="w-6 h-6 text-muted-foreground/30 mb-3" />
    <p className="text-sm leading-relaxed mb-4 line-clamp-5 text-muted-foreground">{t.text}</p>
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-xs font-semibold">
        {t.name.split(' ').map(n => n[0]).join('')}
      </div>
      <div>
        <p className="font-medium text-sm">{t.name}</p>
        <p className="text-xs text-muted-foreground">{t.role} at {t.company}</p>
      </div>
    </div>
  </MagicCard>
);

export default function TestimonialsPage() {
  return (
    <div className="section">
      <div className="container">
        {/* Header */}
        <BlurFade delay={0.1}>
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Testimonials</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              What People Say
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real feedback from colleagues, clients, and partners I've had the privilege to work with.
            </p>
          </div>
        </BlurFade>
      </div>

      {/* Marquee */}
      <BlurFade delay={0.2}>
        <div className="relative mb-12">
          <Marquee pauseOnHover className="[--duration:60s]">
            {testimonials.map((t, idx) => (
              <TestimonialCard key={idx} t={t} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent" />
        </div>
      </BlurFade>

      {/* Full Testimonials */}
      <div className="container">
        <BlurFade delay={0.3}>
          <h2 className="text-2xl font-bold text-center mb-8">Full Testimonials</h2>
        </BlurFade>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((t, idx) => (
            <BlurFade key={t.name} delay={0.3 + idx * 0.05}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <Quote className="w-5 h-5 text-muted-foreground/30 mb-3" />
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-xs font-semibold">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role} at {t.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>

        {/* CTA */}
        <BlurFade delay={0.6}>
          <div className="text-center">
            <Card className="inline-block">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Ready to Join This List?</h2>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Let's create something great together. Start with a free strategy call.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button asChild>
                    <Link href="/contact">
                      Book a Strategy Call
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <a 
                      href="https://linkedin.com/in/ervandra" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      See LinkedIn
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
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