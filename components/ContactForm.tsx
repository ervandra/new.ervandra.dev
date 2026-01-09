"use client";

import { useState, useEffect } from "react";
import { BOOK_INTRO_URL, EMAIL_URL, WHATSAPP_URL } from "@/lib/links";
import { track } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BlurFade } from "@/components/ui/blur-fade";
import { Calendar, Mail, MessageCircle, Send } from "lucide-react";

type LeadForm = {
  role: string;
  teamSize: string;
  problem: string;
  deadline: string;
  success: string;
  budget: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<LeadForm>({
    role: "",
    teamSize: "",
    problem: "",
    deadline: "",
    success: "",
    budget: "",
  });
  const [status, setStatus] = useState<string | null>(null);
  const [utms, setUtms] = useState<Record<string, string>>({});

  // Handle UTM params on client side only
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const utmData: Record<string, string> = {};
      ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach((key) => {
        const value = params.get(key);
        if (value) utmData[key] = value;
      });
      setUtms(utmData);
    }
  }, []);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          path: typeof window !== "undefined" ? window.location.pathname : "/contact",
          ...utms,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      track("lead_submit", { path: "/contact", ...utms });
      setStatus("Received. I'll get back shortly.");
      setForm({
        role: "",
        teamSize: "",
        problem: "",
        deadline: "",
        success: "",
        budget: "",
      });
    } catch {
      setStatus("Something went sideways. Try again or email me.");
    }
  };

  const hasWA = Boolean(WHATSAPP_URL);
  const hasBook = Boolean(BOOK_INTRO_URL);
  const hasEmail = Boolean(EMAIL_URL);

  const inputClass =
    "w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition-all";

  return (
    <div className="section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left side - Info */}
          <BlurFade delay={0.1}>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Let's Build Something Together
              </h1>
              <p className="text-muted-foreground mb-6">
                Tell me about your challenges. Short answers are better than
                perfect - we'll refine together.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium">Free Strategy Call</p>
                    <p className="text-muted-foreground">
                      45 minutes, no commitment
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium">Quick Response</p>
                    <p className="text-muted-foreground">
                      Usually within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {hasBook && (
                  <Button className="gap-2" asChild>
                    <a
                      href={BOOK_INTRO_URL!}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        track("cta_click", {
                          cta: "book_intro",
                          location: "contact_page",
                        })
                      }
                    >
                      <Calendar className="w-4 h-4" />
                      Book a Call
                    </a>
                  </Button>
                )}
                {hasWA && (
                  <Button variant="outline" className="gap-2" asChild>
                    <a
                      href={WHATSAPP_URL!}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        track("cta_click", {
                          cta: "whatsapp",
                          location: "contact_page",
                        })
                      }
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </Button>
                )}
                {hasEmail && (
                  <Button variant="outline" className="gap-2" asChild>
                    <a
                      href={EMAIL_URL!}
                      onClick={() =>
                        track("cta_click", {
                          cta: "email",
                          location: "contact_page",
                        })
                      }
                    >
                      <Mail className="w-4 h-4" />
                      Email
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </BlurFade>

          {/* Right side - Form */}
          <BlurFade delay={0.2}>
            <Card>
              <CardContent className="p-6">
                <form
                  onSubmit={submit}
                  className="grid gap-4"
                  aria-label="Lead intake form"
                >
                  <label className="grid gap-1.5">
                    <span className="text-sm font-medium">Your role</span>
                    <input
                      required
                      value={form.role}
                      onChange={(e) =>
                        setForm({ ...form, role: e.target.value })
                      }
                      className={inputClass}
                      placeholder="Founder, Ops Lead, Agent, etc."
                    />
                  </label>
                  <label className="grid gap-1.5">
                    <span className="text-sm font-medium">Team size</span>
                    <input
                      required
                      value={form.teamSize}
                      onChange={(e) =>
                        setForm({ ...form, teamSize: e.target.value })
                      }
                      className={inputClass}
                      placeholder="e.g., 5, 20, 100"
                    />
                  </label>
                  <label className="grid gap-1.5">
                    <span className="text-sm font-medium">
                      What's the challenge? (1-2 lines)
                    </span>
                    <textarea
                      required
                      value={form.problem}
                      onChange={(e) =>
                        setForm({ ...form, problem: e.target.value })
                      }
                      className={`${inputClass} min-h-24 resize-none`}
                      placeholder="What's blocking your growth or eating your time?"
                    />
                  </label>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="grid gap-1.5">
                      <span className="text-sm font-medium">Timeline</span>
                      <input
                        required
                        value={form.deadline}
                        onChange={(e) =>
                          setForm({ ...form, deadline: e.target.value })
                        }
                        className={inputClass}
                        placeholder="e.g., Q4, 8 weeks"
                      />
                    </label>
                    <label className="grid gap-1.5">
                      <span className="text-sm font-medium">Budget range</span>
                      <input
                        required
                        value={form.budget}
                        onChange={(e) =>
                          setForm({ ...form, budget: e.target.value })
                        }
                        className={inputClass}
                        placeholder="e.g., 5-10M, 25-50M IDR"
                      />
                    </label>
                  </div>
                  <label className="grid gap-1.5">
                    <span className="text-sm font-medium">Success looks like...</span>
                    <input
                      required
                      value={form.success}
                      onChange={(e) =>
                        setForm({ ...form, success: e.target.value })
                      }
                      className={inputClass}
                      placeholder="What outcome proves it worked?"
                    />
                  </label>
                  <Button type="submit" className="w-full gap-2 mt-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                  {status && (
                    <p className="text-sm text-muted-foreground text-center" role="status">
                      {status}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
