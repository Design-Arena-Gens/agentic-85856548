import Script from "next/script";
import Hero from "@/components/Hero";
import SkillHighlights from "@/components/SkillHighlights";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import CaseStudies from "@/components/CaseStudies";
import Certifications from "@/components/Certifications";
import AngularExperienceWidget from "@/components/AngularExperienceWidget";
import ContactCTA from "@/components/ContactCTA";
import BackgroundGrid from "@/components/BackgroundGrid";

const angularProjects = [
  {
    title: "Design System Builder",
    description:
      "Angular-driven UI kit that unifies theming, accessibility, and micro-interactions for internal tools across a fintech organization.",
    metrics: [
      "30+ reusable components delivered",
      "9% increase in design-to-dev velocity",
      "WCAG AA compliance baked in"
    ]
  },
  {
    title: "Offline-insights Dashboard",
    description:
      "Progressive Angular dashboard leveraging RxJS bindings for resilient real-time analytics with offline caching.",
    metrics: [
      "Handled 50k+ daily events",
      "99.95% session uptime",
      "Latency under 180ms"
    ]
  }
];

const angularSkillFocus = [
  "RxJS state orchestration",
  "Hybrid rendering with Angular Elements",
  "Component schematics automation",
  "NX-driven monorepos"
];

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-900/60 via-slate-950 to-slate-950" />
      <BackgroundGrid />
      <div className="noise-overlay" />
      <div className="relative z-10 flex flex-col gap-24 pb-32">
        <Hero />
        <SkillHighlights />
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
          <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:items-start">
            <AngularExperienceWidget
              projects={angularProjects}
              focusAreas={angularSkillFocus}
            />
            <ExperienceTimeline />
          </div>
        </section>
        <CaseStudies />
        <Certifications />
        <ContactCTA />
      </div>
      <Script
        src="/angular-widget.js"
        strategy="afterInteractive"
      />
    </main>
  );
}
