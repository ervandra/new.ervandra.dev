"use client";

import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { BOOK_INTRO_URL, WHATSAPP_URL } from "@/lib/links";
import { track } from "@/lib/analytics";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTA() {
  const hasBook = Boolean(BOOK_INTRO_URL);
  const hasWA = Boolean(WHATSAPP_URL);

  return (
    <section className="section bg-foreground text-background">
      <div className="container">
        <BlurFade delay={0.1}>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Systematize Your Operations?
            </h2>
            <p className="text-background/70 mb-8">
              Let's have a conversation about your challenges. 
              No pitch, just clarity on how I might help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {hasBook ? (
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="gap-2 bg-background text-foreground hover:bg-background/90"
                  asChild
                >
                  <a
                    href={BOOK_INTRO_URL!}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track("cta_click", { cta: "book_intro", location: "cta_section" })}
                  >
                    Book Free Call
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              ) : (
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="gap-2 bg-background text-foreground hover:bg-background/90"
                  asChild
                >
                  <Link href="/contact" onClick={() => track("cta_click", { cta: "book_intro", location: "cta_section" })}>
                    Book Free Call
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              )}
              {hasWA && (
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="gap-2 border-background/30 text-background hover:bg-background/10"
                  asChild
                >
                  <a
                    href={WHATSAPP_URL!}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track("cta_click", { cta: "whatsapp", location: "cta_section" })}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Message Directly
                  </a>
                </Button>
              )}
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
