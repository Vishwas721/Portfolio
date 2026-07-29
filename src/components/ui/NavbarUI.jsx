export default function NavbarUI() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-8 py-5 flex items-center justify-between bg-black/40 backdrop-blur-md border-b border-white/10 pointer-events-auto">
      <a
        href="#hero"
        className="font-mono font-bold text-sm tracking-widest text-white hover:text-cyan-400 transition-colors"
      >
        VK // ARCHITECT
      </a>

      <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-gray-400">
        <a href="#hero" className="hover:text-white transition-colors">
          01 // Hero
        </a>
        <a href="#projects" className="hover:text-white transition-colors">
          02 // Artifacts
        </a>
        <a href="#about" className="hover:text-white transition-colors">
          03 // Philosophy
        </a>
        <a href="#contact" className="hover:text-white transition-colors">
          04 // Signal
        </a>
      </nav>
    </header>
  );
}