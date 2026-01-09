"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How is this different from hiring an agency?",
    a: "Agencies often have layers of account managers and junior devs. I work directly with you, bringing senior experience to every conversation. You get strategy AND execution from the same person who understands your business.",
  },
  {
    q: "What tech stack do you work with?",
    a: "Primarily JavaScript/TypeScript, React, Next.js, Node.js, and C# (.NET). For AI, I work with OpenAI, Claude, and custom RAG pipelines. I choose tools based on your constraints, not my preferences.",
  },
  {
    q: "How quickly can I see results?",
    a: "Quick wins typically appear within 2-4 weeks. Larger system overhauls take 8-12 weeks. I'm transparent about timelines upfront and focus on delivering early value while building toward bigger goals.",
  },
  {
    q: "I'm not technical. Can we still work together?",
    a: "Absolutely. I translate technical complexity into business outcomes. You'll always understand what we're building, why, and how it impacts your bottom line.",
  },
  {
    q: "Do you just give advice or do you actually build things?",
    a: "Both. I can advise on architecture and strategy, or roll up my sleeves and ship code. Most engagements are a mix—strategy to ensure we're solving the right problem, then execution to make it real.",
  },
  {
    q: "What about ongoing support after a project?",
    a: "Every project includes documentation and handoff. For ongoing support, the Fractional CPTO model works best. You get a tech partner who knows your systems inside and out.",
  },
];

export default function FAQ() {
  return (
    <section className="section">
      <div className="container max-w-3xl">
        <BlurFade delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Common questions answered upfront.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.2}>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`}
                className="border rounded-lg px-4 bg-background"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </BlurFade>
      </div>
    </section>
  );
}
