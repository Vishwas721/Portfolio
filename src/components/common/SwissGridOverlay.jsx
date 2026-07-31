import React from 'react';

export default function SwissGridOverlay() {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none select-none mix-blend-difference text-white">
      {/* Precision Edge Frame */}
      <div className="absolute inset-4 border border-white/80"></div>

      {/* 12-Column Swiss Grid Rulers (Subtle Structural Underlay) */}
      <div className="absolute inset-0 px-4 grid grid-cols-12 gap-4 h-full w-full opacity-20">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="h-full border-l border-white/30"></div>
        ))}
      </div>

      {/* Corner Crop Marks for Analog Print Aesthetic */}
      {/* Top Left */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white translate-x-2 translate-y-2"></div>
      {/* Top Right */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white -translate-x-2 translate-y-2"></div>
      {/* Bottom Left */}
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white translate-x-2 -translate-y-2"></div>
      {/* Bottom Right */}
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white -translate-x-2 -translate-y-2"></div>

      {/* Center Precision Crosshair */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-8 h-8">
          <div className="absolute top-1/2 left-0 w-full h-px bg-white -translate-y-1/2"></div>
          <div className="absolute top-0 left-1/2 w-px h-full bg-white -translate-x-1/2"></div>
        </div>
      </div>

      {/* Top Technical Metadata Footers */}
      <div className="absolute top-6 left-6 flex space-x-12 text-[0.65rem] uppercase tracking-widest font-mono">
        <ul className="flex flex-col space-y-1">
          <li>Helvetica: SGSI 5SIV</li>
          <li>Helvetica: saen 70es</li>
          <li>Helvetica: snalkxe</li>
        </ul>
        <ul className="flex flex-col space-y-1">
          <li>Halvetlce Moue</li>
          <li>oupitanisrelien</li>
          <li>daloy f0otz</li>
        </ul>
        <ul className="flex flex-col space-y-1">
          <li>Menu</li>
          <li>Deoorats</li>
          <li>Design</li>
        </ul>
      </div>

      {/* Bottom Technical Metadata Footers */}
      <div className="absolute bottom-6 left-6 flex space-x-12 text-[0.65rem] uppercase tracking-widest font-mono text-right md:text-left">
        <ul className="flex flex-col space-y-1">
          <li>Gstreene ostzioa</li>
          <li>Fraxtinte carrera siods</li>
          <li>Mrenv oonxv</li>
        </ul>
        <ul className="flex flex-col space-y-1">
          <li>Mssigntts ms designs</li>
          <li>Ewocan npps</li>
          <li>Nloovion sppe</li>
        </ul>
        <ul className="flex flex-col space-y-1">
          <li>Tosts and access</li>
          <li>Section 01: Kinetic Codex</li>
        </ul>
      </div>
    </div>
  );
}