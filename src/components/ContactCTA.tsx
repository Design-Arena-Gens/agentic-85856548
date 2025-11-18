function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative mx-auto w-full max-w-5xl rounded-3xl border border-primary-500/40 bg-gradient-to-br from-primary-600/30 via-primary-500/10 to-slate-950 px-8 py-12 text-slate-100 shadow-[0_0_45px_rgba(59,130,246,0.25)] backdrop-blur"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight">
            Ready to elevate your product experience?
          </h2>
          <p className="mt-3 text-sm text-slate-200/90">
            I partner with design and engineering teams to ship React and Angular
            experiences users love. Share project details to receive a tailored
            roadmap within 48 hours.
          </p>
        </div>
        <a
          href="mailto:hello@inezcollins.dev"
          className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-3 text-sm font-semibold text-primary-200 transition hover:bg-slate-900 hover:text-primary-100"
        >
          hello@inezcollins.dev
        </a>
      </div>
    </section>
  );
}

export default ContactCTA;
