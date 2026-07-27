export default function HeroUI() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-transparent pointer-events-none px-6 sm:px-8 lg:px-12 text-center">
      <div className="max-w-6xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-cyan-300/60 sm:text-sm">
          PORTFOLIO / SIGNAL ACTIVE
        </p>

        <h1 className="text-7xl font-black text-white tracking-tighter">
          VISHWAS K
        </h1>

        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.42em] text-white/70 sm:text-base lg:text-lg">
          FULL-STACK WEB DEVELOPER
        </p>

        <p className="mt-4 text-sm font-medium tracking-[0.22em] text-cyan-200/55 sm:text-base">
          PERN Stack / AI Workflows
        </p>

        <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
      </div>
    </div>
  );
}