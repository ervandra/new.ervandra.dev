"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BOOK_INTRO_URL, WHATSAPP_URL } from "@/lib/links";
import { track } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar, MessageCircle } from "lucide-react";

const nav: { href: "/" | "/services" | "/cases" | "/about" | "/contact"; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/cases", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const hasWA = Boolean(WHATSAPP_URL);
  const hasBook = Boolean(BOOK_INTRO_URL);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center text-background font-bold text-sm">
            EH
          </div>
          <span className="font-semibold group-hover:text-muted-foreground transition-colors">
            Ervandra Halim
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                pathname === item.href
                  ? "text-foreground bg-muted"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2">
          {hasWA ? (
            <Button variant="ghost" size="sm" className="gap-2" asChild>
              <a
                href={WHATSAPP_URL!}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("cta_click", { cta: "whatsapp", location: "header" })}
              >
                <MessageCircle className="w-4 h-4" />
                Message
              </a>
            </Button>
          ) : (
            <Button variant="ghost" size="sm" className="gap-2" asChild>
              <Link
                href="/contact"
                onClick={() => track("cta_click", { cta: "contact", location: "header" })}
              >
                <MessageCircle className="w-4 h-4" />
                Message
              </Link>
            </Button>
          )}
          {hasBook ? (
            <Button size="sm" className="gap-2" asChild>
              <a
                href={BOOK_INTRO_URL!}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("cta_click", { cta: "book_intro", location: "header" })}
              >
                <Calendar className="w-4 h-4" />
                Book Call
              </a>
            </Button>
          ) : (
            <Button size="sm" className="gap-2" asChild>
              <Link
                href="/contact"
                onClick={() => track("cta_click", { cta: "book_intro", location: "header" })}
              >
                <Calendar className="w-4 h-4" />
                Book Call
              </Link>
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container py-4 flex flex-col gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-lg transition-colors ${
                  pathname === item.href
                    ? "text-foreground bg-muted"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-2 mt-4 pt-4 border-t border-border">
              {hasBook ? (
                <Button className="flex-1 gap-2" asChild>
                  <a
                    href={BOOK_INTRO_URL!}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      track("cta_click", { cta: "book_intro", location: "header_mobile" });
                      setMobileOpen(false);
                    }}
                  >
                    <Calendar className="w-4 h-4" />
                    Book Call
                  </a>
                </Button>
              ) : (
                <Button className="flex-1 gap-2" asChild>
                  <Link
                    href="/contact"
                    onClick={() => {
                      track("cta_click", { cta: "book_intro", location: "header_mobile" });
                      setMobileOpen(false);
                    }}
                  >
                    <Calendar className="w-4 h-4" />
                    Book Call
                  </Link>
                </Button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}