import React from "react";

export default function SkillsUI() {
  return (
    <div className="absolute inset-0 p-12 flex flex-col justify-between pointer-events-none">
      {/* Top Editorial Title Bar */}
      <div className="flex justify-between items-baseline border-b border-black/20 pb-4">
        <span className="font-mono text-xs tracking-widest uppercase text-[#007AFF] font-black">
          // SECTION 02 : ISO-LAB
        </span>
        <h2 className="font-black text-2xl tracking-tighter uppercase text-[#111111]">
          TECHNICAL ARSENAL // PERN & AI
        </h2>
        <span className="font-mono text-xs tracking-widest uppercase text-black/50">
          DRAG & TOSS CARTRIDGES
        </span>
      </div>

      {/* Bottom Subtle Guidance Footer */}
      <div className="flex justify-between items-end font-mono text-xs uppercase tracking-widest text-black/50">
        <p>INTERACTIVE 3D POP-ART WORKBENCH</p>
        <p>POSTGRESQL // REACT // NODE // LANGGRAPH</p>
      </div>
    </div>
  );
}