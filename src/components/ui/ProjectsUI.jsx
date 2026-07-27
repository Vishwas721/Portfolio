export default function ProjectsUI() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center text-white py-24 bg-transparent">
      <h2 className="text-5xl font-bold mb-16 text-center">
        ENGINEERING ARTIFACTS
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 max-w-7xl px-8 w-full">
        <article className="p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
          <h3 className="text-3xl font-black tracking-tight mb-4">NagarikOne</h3>
          <p className="text-white/80 leading-relaxed">
            Full-stack civic issue reporting system built on robust database architecture.
          </p>
        </article>

        <article className="p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
          <h3 className="text-3xl font-black tracking-tight mb-4">SummAID</h3>
          <p className="text-white/80 leading-relaxed">
            Automated text-processing application featuring a customized RAG pipeline utilizing pgvector and citation systems.
          </p>
        </article>

        <article className="p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
          <h3 className="text-3xl font-black tracking-tight mb-4">Privex</h3>
          <p className="text-white/80 leading-relaxed">
            Local-first, privacy-preserving agentic AI application leveraging FastAPI frame queues and deterministic state routing.
          </p>
        </article>
      </div>
    </section>
  );
}