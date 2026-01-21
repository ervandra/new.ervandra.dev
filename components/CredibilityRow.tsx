"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";
import { NumberTicker } from "@/components/ui/number-ticker";

const companies = [
  { name: "R/GA", period: "2021-2022" },
  { name: "LifeLearn", period: "2017-2020" },
  { name: "Komunal", period: "2023" },
  { name: "Syntax Solution", period: "2017-Present" },
  { name: "MTF", period: "2023-Present" },
  { name: "CIAYO", period: "2015-2020" },
  { name: "DDTC", period: "" },
  { name: "Paper.id", period: "" },
];

const stats = [
  { value: 13, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 10, suffix: "+", label: "Enterprise Clients" },
];

export default function CredibilityRow() {
  return (
    <section className="py-16 border-y border-border bg-muted/30">
      <div className="container">
        <BlurFade delay={0.1}>
          <div className="flex flex-col gap-12">
            {/* Stats - Centered */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                    <NumberTicker
                      value={stat.value}
                      delay={0.1 + index * 0.15}
                      className="text-foreground"
                    />
                    <span className="text-primary">{stat.suffix}</span>
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Companies */}
            <div className="flex flex-col gap-4 items-center">
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider text-center">
                Trusted by teams at
              </p>
              <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <Marquee pauseOnHover className="[--duration:30s] [--gap:2rem]">
                  {companies.map((company) => (
                    <div
                      key={company.name}
                      className="flex items-center gap-2 px-4 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <span className="text-lg font-semibold">{company.name}</span>
                      {company.period && (
                        <span className="text-xs opacity-50 hidden sm:inline-block">({company.period})</span>
                      )}
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}