import Link from "next/link";

const heroHighlights = [
  { label: "React / Next.js", description: "Server components & streaming UX" },
  { label: "Angular", description: "Enterprise-scale design systems" },
  { label: "UI Engineering", description: "Animations, accessibility-first" }
];

function Hero() {
  return (
    <header className="relative mx-auto mt-16 flex w-full max-w-6xl flex-col gap-12 px-6">
      <div className="flex flex-col gap-8">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1 text-xs uppercase tracking-[0.28em] text-primary-200/90">
          Frontend Developer · 3 Years · React & Angular
        </span>
        <h1 className="text-balance text-5xl font-semibold tracking-tight text-slate-50 md:text-6xl lg:text-7xl">
          I build resilient UX for product teams shipping every sprint.
        </h1>
        <p className="max-w-2xl text-lg text-slate-300 md:text-xl">
          Hi, I&apos;m{" "}
          <span className="font-semibold text-primary-300">Inez Collins</span>.
          I craft design systems, rich dashboards, and highly-performant web
          experiences blending React and Angular to meet enterprise scale and
          startup speed.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="#contact"
            className="rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:bg-primary-400 hover:text-slate-900"
          >
            Start a project
          </Link>
          <a
            href="/inez-collins-resume.pdf"
            className="rounded-full border border-slate-700/80 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-primary-400 hover:text-primary-200"
          >
            Download résumé
          </a>
        </div>
      </div>
      <dl className="grid gap-6 text-sm text-slate-300 md:grid-cols-3">
        {heroHighlights.map((highlight) => (
          <div
            key={highlight.label}
            className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-6 shadow-lg shadow-slate-900/40 backdrop-blur"
          >
            <dt className="text-xs uppercase tracking-[0.22em] text-primary-300">
              {highlight.label}
            </dt>
            <dd className="mt-2 text-base text-slate-200">
              {highlight.description}
            </dd>
          </div>
        ))}
      </dl>
    </header>
  );
}

export default Hero;
