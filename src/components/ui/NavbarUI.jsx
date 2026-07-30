export default function NavbarUI() {
  const navItems = [
    { href: "#hero", label: "01 // Hero" },
    { href: "#skills", label: "02 // Arsenal" },
    { href: "#projects", label: "03 // Artifacts" },
    { href: "#hackathons", label: "04 // Campaigns" },
    { href: "#certifications", label: "05 // Credentials" },
    { href: "#about", label: "06 // Philosophy" },
    { href: "#contact", label: "07 // Signal" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-8 py-5 flex items-center justify-between bg-black/40 backdrop-blur-md border-b border-white/10 pointer-events-auto">
      <a
        href="#hero"
        className="font-mono font-bold text-sm tracking-widest text-white hover:text-cyan-400 transition-colors"
      >
       
      </a>

      <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-gray-400">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="hover:text-white transition-colors">
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}