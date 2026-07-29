export default function AboutUI() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center text-white py-24 px-8 bg-transparent pointer-events-auto">
      <h2 className="text-5xl font-black tracking-tight mb-16 text-center">
        TECHNICAL ARSENAL & PHILOSOPHY
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
        <article className="p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-6 tracking-wide text-cyan-400">
            CORE ARCHITECTURE
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-semibold text-white/90">
              PERN Stack (PostgreSQL, Express, React, Node.js)
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-semibold text-white/90">
              Agentic AI Workflows &amp; Multi-Agent Routing
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-semibold text-white/90">
              RAG Pipelines &amp; Vector Search (pgvector)
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-semibold text-white/90">
              High-Performance WebGL / Three.js
            </div>
          </div>
        </article>

        <article className="p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-6 tracking-wide text-cyan-400">
            ENGINEERING DISCIPLINE
          </h3>

          <div className="space-y-6 text-base leading-8 text-white/85">
            <p>
              Local-first privacy-preserving systems.
            </p>
            <p>
              Deterministic state routing over fragile heuristics.
            </p>
            <p>
              Rigorous full-stack execution from database schema design to frontend telemetry.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}