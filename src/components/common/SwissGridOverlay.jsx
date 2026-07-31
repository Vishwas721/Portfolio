import React from 'react';

export default function SwissGridOverlay() {
  return (
    <div className="fixed inset-0 z-40 pointer-events-none select-none text-black overflow-hidden font-mono text-[8px] sm:text-[10px] leading-tight tracking-widest uppercase">
      
      {/* =========================================
          1. THE INFINITE GRID LINES (Locked to 96px / 24 units)
      ========================================= */}
      <div className="absolute top-24 left-0 w-full h-px bg-black"></div>
      <div className="absolute bottom-24 left-0 w-full h-px bg-black"></div>
      <div className="absolute top-0 bottom-0 left-24 w-px bg-black"></div>
      {/* Right line is covered by Sidebar, but structural completeness is maintained */}
      <div className="absolute top-0 bottom-0 right-24 w-px bg-black"></div>

      {/* =========================================
          2. TOP HEADER METADATA 
          Strictly bounded inside the top 96px margin
      ========================================= */}
      <div className="absolute top-0 left-24 right-24 h-24 flex items-center px-4 sm:px-8">
        <div className="flex space-x-8 sm:space-x-16">
          <ul className="flex flex-col space-y-0.5 font-bold">
            <li>Helvetica: SGSI 5SIV</li>
            <li>Helvetica: saen 70es</li>
            <li>Helvetica: snalkxe</li>
            <li>Helvetica: SS1430zES8</li>
            <li>Hatvslica: X7X4X3UHE</li>
          </ul>
          <ul className="flex flex-col space-y-0.5">
            <li>Halvetlce Moue</li>
            <li>oupitanisrelien</li>
            <li>daloy f0otz</li>
            <li>dederncdatat</li>
            <li>conuisies</li>
          </ul>
          <ul className="flex flex-col space-y-0.5">
            <li>Menu</li>
            <li>Deoorats</li>
            <li>Design</li>
            <li>Decimarxta</li>
            <li>Design</li>
          </ul>
          <ul className="flex flex-col space-y-0.5 md:flex">
            <li>Pests</li>
            <li>Lirpiern</li>
            <li>Cusieinte</li>
            <li>Sbdes</li>
            <li>...</li>
          </ul>
        </div>
      </div>

      {/* Top Right Black Triangle (Inner Offset) */}
      <div className="absolute top-28 right-28">
        <div className="w-0 h-0 border-t-16 border-t-transparent border-l-16 border-l-black border-b-16 border-b-transparent -rotate-45"></div>
      </div>

      {/* =========================================
          3. BOTTOM FOOTER METADATA 
          Strictly bounded inside the bottom 96px margin
      ========================================= */}
      <div className="absolute bottom-0 left-24 right-24 h-24 flex items-center px-4 sm:px-8">
        <div className="flex space-x-8 sm:space-x-16">
          <ul className="flex flex-col space-y-0.5 font-bold">
            <li>Gstreene ostzioa</li>
            <li>Fraxtinte carrera siods</li>
            <li>Grehtens deuseor</li>
            <li>Mrenv oonxv</li>
            <li>Grasoc wanv</li>
          </ul>
          <ul className="flex flex-col space-y-0.5">
            <li>Mssigntts ms designs</li>
            <li>Ewocan npps:</li>
            <li>Nloovion sppe:</li>
            <li>Eardorien sppc</li>
            <li>Secnem sppe:</li>
          </ul>
          <ul className="flex flex-col space-y-0.5">
            <li className="font-bold">Tosts and access</li>
          </ul>
        </div>
      </div>

      {/* =========================================
          4. LEFT SIDEBAR (VERTICAL TEXT)
          Strictly bounded inside the left 96px margin
      ========================================= */}
      <div className="absolute top-24 bottom-24 left-0 w-24 flex flex-col justify-between items-center py-8">
        <div className="-rotate-90 whitespace-nowrap flex flex-col items-center">
          <span className="font-bold">Saboeou i 988</span>
          <span>Foso 888 883 88898</span>
          <span>Hemneci: 88R3D</span>
          <span>Abtkeo: L ZBB</span>
        </div>

        <div className="-rotate-90 whitespace-nowrap flex flex-col items-center">
          <span className="font-bold">Mdeote: Fleane</span>
          <span>Comeoen 88720</span>
          <span>Comoe: 58: 1898</span>
          <span>C0011080081</span>
        </div>

        <div className="-rotate-90 whitespace-nowrap flex flex-col items-center">
          <span className="font-bold">Rheeione Rhtse</span>
          <span>Rmeeione</span>
          <span>Bolo CffS9</span>
        </div>
        
        <div className="-rotate-90 whitespace-nowrap flex flex-col items-center">
          <span className="font-bold">Blood</span>
          <span>Deooeeoe</span>
          <span>08888001001</span>
          <span>0T89 8E088B</span>
        </div>
      </div>
    </div>
  );
}