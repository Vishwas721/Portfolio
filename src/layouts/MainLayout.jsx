import React, { useState } from "react";
import Scene from "../components/canvas/Scene";
import SwissGridOverlay from "../components/ui/SwissGridOverlay";
import SidebarUI from "../components/ui/SidebarUI";
import PaperRipTransition from "../components/ui/PaperRipTransition";

import HeroUI from "../components/ui/HeroUI";
import SkillsUI from "../components/ui/SkillsUI";

export default function MainLayout() {
  const [activeSection, setActiveSection] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // TOUCHPAD SWIPE-TO-RIP TRACKER
  const dragStartX = React.useRef(0);

  const handlePointerDown = (e) => {
    dragStartX.current = e.clientX;
  };

  const handlePointerUp = (e) => {
    const deltaX = e.clientX - dragStartX.current;
    const threshold = 150; // Swipe 150px across the pad to trigger

    // Swipe Left (< -150px) -> Rips from Section 01 to Section 02
    if (deltaX < -threshold && activeSection === 1) {
      setActiveSection(2);
    }
    // Swipe Right (> 150px) -> Rips from Section 02 back to Section 01
    else if (deltaX > threshold && activeSection === 2) {
      setActiveSection(1);
    }
  };

  return (
    <main
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      className="relative w-screen h-screen overflow-hidden bg-white select-none touch-none"
    >
      {/* 1. HISAMI KURITA RIGHT SIDEBAR */}
      <SidebarUI
        activeSection={activeSection}
        onNavRip={(id) => setActiveSection(id)}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* 2. THE VISUAL TEARABLE-UI PAPER RIP TRANSITION */}
      <PaperRipTransition triggerKey={activeSection} />

      {/* 3. THE MAIN STAGE (Pushes left when sidebar opens) */}
      <div
        className={`relative w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isSidebarOpen ? "-translate-x-90" : "translate-x-0"
        }`}
      >
        {/* SWISS GRID LOCKED TO HERO (SECTION 01) ONLY! */}
        {activeSection === 1 && <SwissGridOverlay />}

        {/* Fixed WebGL Canvas */}
        <div className="fixed inset-0 w-full h-full z-0">
          <Scene activeSection={activeSection} />
        </div>

        {/* Minimalist Foreground HTML HUDs */}
        <div className="relative z-10 w-full h-full pointer-events-none flex items-center justify-center">
          {activeSection === 1 && <HeroUI />}
          {activeSection === 2 && <SkillsUI />}
        </div>
      </div>
    </main>
  );
}