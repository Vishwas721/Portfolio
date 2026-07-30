export default function SkillsUI() {
  const skillGroups = [
    {
      title: "FULL-STACK ARCHITECTURE",
      items: ["PERN Stack (PostgreSQL, Express, React, Node.js)", "Tailwind CSS", "Vite"],
    },
    {
      title: "AI & DATA SYSTEMS",
      items: ["pgvector", "LangGraph", "FastAPI", "RAG Pipelines"],
    },
    {
      title: "CREATIVE & WEBGL",
      items: ["Three.js", "React Three Fiber", "GSAP", "Lenis"],
    },
  ];

  return (
    <div id="skills" className="min-h-screen w-full flex flex-col items-center justify-center text-white py-24 px-8 bg-transparent pointer-events-auto">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-14">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.45em] text-cyan-300/60 mb-4">
            SECTION 02 // TECHNICAL ARSENAL
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white">
            TECHNICAL ARSENAL // CORE STACK
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="border border-white/15 bg-white/5 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_24px_80px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="border-b border-white/10 px-6 py-5">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.5em] text-cyan-300/70">
                  {group.title}
                </p>
              </div>

              <div className="grid gap-3 p-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/12 bg-black/25 px-4 py-4 text-sm font-semibold leading-snug text-white/90 shadow-inner shadow-white/5"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}