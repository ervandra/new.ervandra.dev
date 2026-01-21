"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";
import { MagicCard } from "@/components/ui/magic-card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Ervandra is a very special person for us. He always overdelivers his services, even without being asked. He saved us multiple times with quick and working solutions. Our most valuable person regarding technology.",
    author: "Jussi Hurmola",
    role: "CEO, LifeLearn Holdings",
    initials: "JH",
    context: "Client Partner",
  },
  {
    text: "When I first meet Ervan, I know he will be a leader in engineering team someday. As an engineer, Ervan's skill is no doubt. He delivers world-class technology solution for clients and works with people from around the globe.",
    author: "David Alfa Sunarna",
    role: "Associate Technology Director, R/GA",
    initials: "DA",
    context: "Former Manager",
  },
  {
    text: "He knew the principle when doing the work and always questioned what we could improve. His technical skills are unquestionable, I can trust him to deliver without any supervision whatsoever.",
    author: "Eko Purnomo",
    role: "VP of Technology, Komunal",
    initials: "EP",
    context: "Peer Collaborator",
  },
  {
    text: "Ervandra is an extraordinary software engineer, he always comes with a great solution, practical and impactful for any result of his project. You will find 'engineering thinking' lives on this very talented guy.",
    author: "Donny Riantori",
    role: "VP Engineering, DDTC",
    initials: "DR",
    context: "Peer Collaborator",
  },
  {
    text: "Open minded, critical thinking, resourceful and always look for improvement. He's always work really hard to improve and expand his knowledge.",
    author: "Erick Liemarga",
    role: "Chief Product Officer, LABABOOK",
    initials: "EL",
    context: "Peer Collaborator",
  },
  {
    text: "He is a highly focused person as well as analytical. His energy to make things happen was contagious and it helped us achieve great goals.",
    author: "Effene Henry",
    role: "Lead Squad Engineer, Paper.id",
    initials: "EH",
    context: "Peer Collaborator",
  },
  {
    text: "He is like a witch, because he can bring delightful experiences and interactions to the UI. One of the best front end web developers I know.",
    author: "Fran Sisco",
    role: "Android Developer, Bank MNC",
    initials: "FS",
    context: "Peer Collaborator",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <MagicCard 
    className="w-[320px] mx-3 p-5 cursor-default"
    gradientColor="hsl(0 0% 92%)"
  >
    <div className="flex items-center justify-between mb-3">
      <Quote className="w-6 h-6 text-muted-foreground/30" />
      <span className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground">
        {testimonial.context}
      </span>
    </div>
    <p className="text-sm mb-4 leading-relaxed text-muted-foreground">{testimonial.text}</p>
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-xs font-semibold">
        {testimonial.initials}
      </div>
      <div>
        <p className="font-medium text-sm">{testimonial.author}</p>
        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
      </div>
    </div>
  </MagicCard>
);

export default function TestimonialsCarousel() {
  return (
    <section id="testimonials" className="section overflow-hidden bg-muted/30">
      <div className="container mb-8">
        <BlurFade delay={0.1}>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Partners & Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real feedback from colleagues and clients who've worked with me over 13+ years.
            </p>
          </div>
        </BlurFade>
      </div>

      <BlurFade delay={0.2}>
        <div className="relative">
          <Marquee pauseOnHover className="[--duration:50s]">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} testimonial={testimonial} />
            ))}
          </Marquee>
          
          {/* Gradient overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-muted/30 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-muted/30 to-transparent" />
        </div>
      </BlurFade>
    </section>
  );
}