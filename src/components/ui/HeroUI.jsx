export default function HeroUI() {
  return (
    <section className="flex h-screen w-full items-center justify-center px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-cyan-300/60 sm:text-sm">
          PORTFOLIO / SIGNAL ACTIVE
        </p>

        <h1 className="text-6xl font-black tracking-tighter text-white drop-shadow-[0_0_28px_rgba(255,255,255,0.16)] sm:text-7xl lg:text-8xl xl:text-[8.5rem]">
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
    </section>
  );
}