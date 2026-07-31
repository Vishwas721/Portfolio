export default function ContactUI() {
  return (
    <section id="contact" className="min-h-screen w-full flex flex-col items-center justify-between text-white py-24 px-8 bg-transparent pointer-events-auto">
      <div className="flex flex-col items-center justify-center my-auto max-w-3xl text-center pointer-events-auto">
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
          INITIATE SIGNAL
        </h2>

        <p className="text-lg text-gray-400 mb-10 max-w-xl">
          Open for full-stack engineering roles, multi-agent AI collaborations, and high-performance web architecture projects.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="mailto:contact@example.com"
            className="px-8 py-4 bg-white/5 hover:bg-white/15 border border-white/20 hover:border-cyan-400 transition-all duration-300 font-bold tracking-wider uppercase text-sm backdrop-blur-md rounded-none cursor-pointer pointer-events-auto"
          >
            Email Transmission
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 bg-white/5 hover:bg-white/15 border border-white/20 hover:border-cyan-400 transition-all duration-300 font-bold tracking-wider uppercase text-sm backdrop-blur-md rounded-none cursor-pointer pointer-events-auto"
          >
            GitHub Profile
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 bg-white/5 hover:bg-white/15 border border-white/20 hover:border-cyan-400 transition-all duration-300 font-bold tracking-wider uppercase text-sm backdrop-blur-md rounded-none cursor-pointer pointer-events-auto"
          >
            LinkedIn Network
          </a>
        </div>
      </div>

      <footer className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-gray-500 tracking-widest uppercase">
        <span>SYSTEM STATUS: ONLINE </span>
        <span>VISHWAS K © 2026 // ALL RIGHTS RESERVED</span>
      </footer>
    </section>
  );
}