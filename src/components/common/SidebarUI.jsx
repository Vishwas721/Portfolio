import React from "react";

const SECTIONS = [
  { id: 1, label: "01 // CODEX", subtitle: "KINETIC CODEX" },
  { id: 2, label: "02 // ISO-LAB", subtitle: "TECHNICAL ISO-LAB" },
  { id: 3, label: "03 // ARTIFACTS", subtitle: "PERN ARCHITECTURES" },
  { id: 4, label: "04 // CAMPAIGNS", subtitle: "HACKATHON DEPLOYMENTS" },
  { id: 5, label: "05 // CREDENTIALS", subtitle: "VERIFIED MATRIX" },
  { id: 6, label: "06 // PHILOSOPHY", subtitle: "ATHELTIC DISCIPLINE" },
  { id: 7, label: "07 // SIGNAL", subtitle: "TRANSMISSION PORT" },
];

export default function SidebarUI({ activeSection, onNavRip, isOpen, setIsOpen }) {
  return (
    <>
      {/* 1. DEFAULT RIGHT-EDGE TRIGGER BAR */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-0 right-0 h-full w-24 bg-white border-l border-black z-50 flex flex-col items-center justify-between py-8 cursor-pointer hover:bg-gray-100 transition-colors"
      >
        <span className="text-black font-mono text-xs tracking-widest -rotate-90 whitespace-nowrap">
          VISHWAS K // ARCHITECT
        </span>

        {/* 3-Line Hamburger / Close Icon */}
        <div className="w-8 h-8 flex flex-col items-center justify-center space-y-1">
          {isOpen ? (
            <span className="text-black text-2xl font-black leading-none -mt-1">×</span>
          ) : (
            <>
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
            </>
          )}
        </div>

        <span className="text-black font-mono text-xs tracking-widest -rotate-90 whitespace-nowrap">
          0{activeSection} // ACTIVE
        </span>
      </div>

      {/* 2. HISAMI KURITA PUSH-LEFT PANEL */}
      <aside
        className={`fixed top-0 right-0 h-full w-90 bg-[#E8ECEF] text-[#111111] z-40 border-l border-black/20 flex flex-col justify-between p-8 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-black/50 mb-8">
            // INDEX // Z-AXIS ARCHIVE
          </p>

          <nav className="flex flex-col space-y-4">
            {SECTIONS.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => {
                    onNavRip(sec.id);
                    setIsOpen(false);
                  }}
                  className={`text-left group transition-all ${
                    isActive ? "translate-x-2" : "hover:translate-x-2"
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <span
                      className={`font-black text-2xl tracking-tighter uppercase ${
                        isActive ? "text-[#007AFF]" : "text-[#111111] group-hover:text-[#007AFF]"
                      }`}
                    >
                      {sec.label}
                    </span>
                  </div>
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest text-black/50 block mt-0.5">
                    {sec.subtitle}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="border-t border-black/10 pt-4 font-mono text-[0.65rem] text-black/50 uppercase">
          <p>BENGALURU, INDIA // REVA UNIV</p>
          <p>PERN STACK // AGENTIC AI</p>
        </div>
      </aside>
    </>
  );
}