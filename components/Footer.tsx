"use client";

import Link from "next/link";
import { BOOK_INTRO_URL, EMAIL_URL, WHATSAPP_URL } from "@/lib/links";
import { track } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar, Mail, MessageCircle, Linkedin, Github } from "lucide-react";

const footerNav: { href: "/services" | "/cases" | "/about" | "/contact"; label: string }[] = [
  { href: "/services", label: "Services" },
  { href: "/cases", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const hasWA = Boolean(WHATSAPP_URL);
  const hasBook = Boolean(BOOK_INTRO_URL);
  const hasEmail = Boolean(EMAIL_URL);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12 md:py-16">
        {/* Top section */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center text-background font-bold text-sm">
                EH
              </div>
              <span className="font-semibold">Ervandra Halim</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Strategic Systems Architect helping business owners build operations 
              that scale without chaos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {footerNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold mb-4">Let's Work Together</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Start small, ship fast, expand by evidence.
            </p>
            <div className="flex flex-wrap gap-2">
              {hasBook ? (
                <Button size="sm" className="gap-2" asChild>
                  <a
                    href={BOOK_INTRO_URL!}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track("cta_click", { cta: "book_intro", location: "footer" })}
                  >
                    <Calendar className="w-4 h-4" />
                    Book Call
                  </a>
                </Button>
              ) : (
                <Button size="sm" className="gap-2" asChild>
                  <Link
                    href="/contact"
                    onClick={() => track("cta_click", { cta: "book_intro", location: "footer" })}
                  >
                    <Calendar className="w-4 h-4" />
                    Book Call
                  </Link>
                </Button>
              )}
              {hasWA && (
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a
                    href={WHATSAPP_URL!}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track("cta_click", { cta: "whatsapp", location: "footer" })}
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {year} Ervandra Halim. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {hasEmail && (
              <a
                href={EMAIL_URL!}
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => track("cta_click", { cta: "email", location: "footer" })}
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            )}
            <a
              href="https://linkedin.com/in/ervandra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/ervandra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}