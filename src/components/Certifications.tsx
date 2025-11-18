const certifications = [
  {
    name: "Google UX Design Professional Certificate",
    year: 2023,
    focus: "Research-backed prototyping and usability testing."
  },
  {
    name: "Microsoft Certified: Azure Developer Associate",
    year: 2022,
    focus: "Secure cloud integrations powering serverless frontends."
  },
  {
    name: "Scrum Alliance CSM",
    year: 2021,
    focus: "Facilitating sprint rituals and cross-team alignment."
  }
];

function Certifications() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6">
      <div className="rounded-3xl border border-slate-800/70 bg-slate-950/70 px-8 py-10 shadow-xl shadow-slate-900/40 backdrop-blur">
        <h2 className="text-2xl font-semibold text-slate-100">
          Certifications & Ops Enablement
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-400">
          Continual learning keeps shipping velocity high while protecting
          quality for teams that span disciplines and time zones.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {certifications.map((certification) => (
            <article
              key={certification.name}
              className="rounded-2xl border border-slate-800/60 bg-slate-950/60 p-6"
            >
              <h3 className="text-lg font-semibold text-slate-100">
                {certification.name}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-primary-200/80">
                {certification.year}
              </p>
              <p className="mt-3 text-sm text-slate-300">
                {certification.focus}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
