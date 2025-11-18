'use client';

import { useEffect, useRef, useState } from "react";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

type AngularProject = {
  title: string;
  description: string;
  metrics: string[];
};

type AngularExperienceWidgetProps = {
  projects: AngularProject[];
  focusAreas: string[];
};

declare global {
  interface HTMLElementTagNameMap {
    "angular-experience-card": HTMLElement & {
      projects?: AngularProject[];
      focusAreas?: string[];
    };
  }

  namespace JSX {
    interface IntrinsicElements {
      "angular-experience-card": DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

function AngularExperienceWidget({
  projects,
  focusAreas
}: AngularExperienceWidgetProps) {
  const elementRef = useRef<HTMLElementTagNameMap["angular-experience-card"] | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || typeof window === "undefined") {
      return;
    }

    const assignData = () => {
      if (!elementRef.current) return;
      elementRef.current.projects = projects;
      elementRef.current.focusAreas = focusAreas;
      setReady(true);
    };

    if ("customElements" in window) {
      window.customElements
        .whenDefined("angular-experience-card")
        .then(assignData)
        .catch((error) => {
          console.error("Angular custom element failed to register", error);
        });
    } else {
      assignData();
    }
  }, [projects, focusAreas]);

  return (
    <section className="relative flex flex-col gap-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-8 shadow-xl shadow-slate-900/40 backdrop-blur">
      <div>
        <h2 className="text-2xl font-semibold text-slate-100">
          Angular operations, React velocity
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          This widget is powered by Angular Elements, showcasing project depth
          and team enablement strategies that complement the React ecosystem.
        </p>
      </div>
      <div className="relative overflow-hidden rounded-2xl border border-primary-500/30 bg-slate-950/90">
        <div className="pointer-events-none absolute -left-10 top-1/2 h-72 w-72 -translate-y-1/2 rotate-12 rounded-full bg-primary-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 right-0 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="relative p-6">
          {!ready && (
            <div className="mb-6 animate-pulse space-y-3 text-sm text-slate-500">
              <div className="h-4 w-2/3 rounded bg-slate-800" />
              <div className="h-4 w-1/2 rounded bg-slate-800" />
              <div className="h-3 w-full rounded bg-slate-900" />
            </div>
          )}
          <angular-experience-card ref={elementRef} />
        </div>
      </div>
    </section>
  );
}

export default AngularExperienceWidget;
