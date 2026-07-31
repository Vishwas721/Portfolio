export default function HackathonsUI() {
  const campaigns = [
    {
      title: "AI ENGINEERING HACKATHON RUNS",
      label: "Rapid build sprint",
      description:
        "Delivered focused prototypes under pressure, pairing retrieval workflows, agent orchestration, and polished presentation layers into demo-ready systems.",
    },
    {
      title: "COMPETITIVE FULL-STACK CAMPAIGNS",
      label: "Brutalist ship cycle",
      description:
        "Translated problem statements into production-shaped applications with tight schema design, resilient APIs, and clear product narratives.",
    },
    {
      title: "PROTOTYPING WITH DEADLINES",
      label: "Timeboxed execution",
      description:
        "Focused on ruthless prioritization, visual clarity, and measurable outcomes while iterating fast across frontend, backend, and AI layers.",
    },
    {
      title: "TEAM-BASED BUILD COLLABORATIONS",
      label: "Cross-functional delivery",
      description:
        "Worked across concept, implementation, and refinement phases to turn rough ideas into coherent submission-ready experiences.",
    },
  ];

  return (
    <div id="hackathons" className="min-h-screen w-full flex flex-col items-center justify-center text-white py-24 px-8 bg-transparent pointer-events-auto">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-14">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.45em] text-cyan-300/60 mb-4">
            SECTION 04 // COMPETITIVE BUILDS
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white">
            COMPETITIVE BUILD CAMPAIGNS // HACKATHONS
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {campaigns.map((campaign, index) => (
            <article
              key={campaign.title}
              className="border-2 border-white/18 bg-black/25 backdrop-blur-md p-6 sm:p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_28px_70px_rgba(0,0,0,0.42)] transition-all duration-300 hover:-translate-y-1 hover:border-white/35"
            >
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4 mb-5">
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.45em] text-cyan-300/65 mb-2">
                    CAMPAIGN {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                    {campaign.title}
                  </h3>
                </div>
                <span className="shrink-0 rounded-none border border-white/20 px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.35em] text-white/75">
                  {campaign.label}
                </span>
              </div>

              <p className="text-sm sm:text-base leading-7 text-white/80">
                {campaign.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}