export default function CertificationsUI() {
  const milestones = [
    {
      title: "B.E. INFORMATION SCIENCE & ENGINEERING",
      subtitle: "Academic excellence",
      detail: "Foundational training in systems thinking, software engineering, databases, and applied problem solving.",
    },
    {
      title: "FULL-STACK DEVELOPMENT CREDENTIALS",
      subtitle: "Production-ready web craft",
      detail: "Validated command of modern frontend architecture, backend integration, and deployment-oriented workflows.",
    },
    {
      title: "AI & DATABASE SPECIALIZATION",
      subtitle: "Retrieval + orchestration",
      detail: "Focused study in vector search, agent workflows, and practical AI system design for real applications.",
    },
    {
      title: "MILESTONE PROJECT DELIVERY",
      subtitle: "Portfolio proof",
      detail: "Evidence of sustained execution across civic platforms, AI experiments, and immersive creative web experiences.",
    },
  ];

  return (
    <div id="certifications" className="min-h-screen w-full flex flex-col items-center justify-center text-white py-24 px-8 bg-transparent pointer-events-auto">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-14">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.45em] text-cyan-300/60 mb-4">
            SECTION 05 // CREDENTIALS
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white">
            CREDENTIALS & MILESTONES // CERTIFICATIONS
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {milestones.map((milestone) => (
            <article
              key={milestone.title}
              className="group border border-white/15 bg-white/5 backdrop-blur-md p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_24px_80px_rgba(0,0,0,0.34)] transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-400/35"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="h-px flex-1 bg-linear-to-r from-cyan-300/70 to-transparent" />
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.45em] text-white/50">
                  MILESTONE
                </span>
              </div>

              <h3 className="text-xl font-black tracking-tight text-white mb-3">
                {milestone.title}
              </h3>

              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70 mb-4">
                {milestone.subtitle}
              </p>

              <p className="text-sm leading-7 text-white/78">
                {milestone.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}