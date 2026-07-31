import React, { useState, useRef, useCallback } from "react";
import Scene from "../components/canvas/Scene";
import SwissGridOverlay from "../components/common/SwissGridOverlay";
import SidebarUI from "../components/common/SidebarUI";

import HeroUI from "../components/sections/section01_hero/HeroUI";
import SkillsUI from "../components/sections/section02_skills/SkillsUI";

export default function MainLayout() {
  const [activeSection, setActiveSection] = useState(1);
  const [targetSection, setTargetSection] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const dragStartX = useRef(0);
  const wheelCooldown = useRef(false);

  const initiateTransition = useCallback(
    (newSection) => {
      if (newSection === activeSection || isTransitioning) return;
      setTargetSection(newSection);
      setIsTransitioning(true);
      setIsSidebarOpen(false);
    },
    [activeSection, isTransitioning]
  );

  const handlePointerDown = (e) => {
    dragStartX.current = e.clientX;
  };

  const handlePointerUp = (e) => {
    const deltaX = e.clientX - dragStartX.current;
    const threshold = 150;

    if (deltaX < -threshold && activeSection === 1) {
      initiateTransition(2);
    } else if (deltaX > threshold && activeSection === 2) {
      initiateTransition(1);
    }
  };

  const handleWheel = (e) => {
    if (isTransitioning || wheelCooldown.current) return;

    const threshold = 40;
    if (e.deltaY > threshold && activeSection === 1) {
      wheelCooldown.current = true;
      initiateTransition(2);
      setTimeout(() => (wheelCooldown.current = false), 1400);
    } else if (e.deltaY < -threshold && activeSection === 2) {
      wheelCooldown.current = true;
      initiateTransition(1);
      setTimeout(() => (wheelCooldown.current = false), 1400);
    }
  };

  return (
    <main
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onWheel={handleWheel}
      className="relative w-screen h-screen overflow-hidden bg-white select-none touch-none"
    >
      {/* 1. HISAMI KURITA RIGHT SIDEBAR */}
      <SidebarUI
        activeSection={activeSection}
        onNavRip={(id) => initiateTransition(id)}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* 2. THE MAIN STAGE */}
      <div
        className={`relative w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isSidebarOpen ? "-translate-x-90" : "translate-x-0"
        }`}
      >
        {activeSection === 1 && <SwissGridOverlay />}

        {/* 
            DYNAMIC CROP: Updated to 24 (96px) to match the new border width.
        */}
        <div 
          className={`absolute z-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            activeSection === 1 
              ? "top-24 bottom-24 left-24 right-24" 
              : "inset-0"
          }`}
        >
          <Scene
            activeSection={activeSection}
            transitionKey={isTransitioning ? targetSection : null}
            onMidpoint={() => setActiveSection(targetSection)}
            onComplete={() => setIsTransitioning(false)}
          />
        </div>

        <div className="relative z-10 w-full h-full pointer-events-none flex items-center justify-center transition-opacity duration-500">
          <div
            className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${
              activeSection === 1 && !isTransitioning ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <HeroUI />
          </div>
          <div
            className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${
              activeSection === 2 && !isTransitioning ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <SkillsUI />
          </div>
        </div>
      </div>
    </main>
  );
}