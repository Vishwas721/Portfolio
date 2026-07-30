import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

import Scene from "../components/canvas/Scene";
import SwissGridOverlay from "../components/ui/SwissGridOverlay";

import NavbarUI from "../components/ui/NavbarUI";
import HeroUI from "../components/ui/HeroUI";
import SkillsUI from "../components/ui/SkillsUI";
import ProjectsUI from "../components/ui/ProjectsUI";
import HackathonsUI from "../components/ui/HackathonsUI";
import CertificationsUI from "../components/ui/CertificationsUI";
import AboutUI from "../components/ui/AboutUI";
import ContactUI from "../components/ui/ContactUI";

// Register GSAP plugins globally
gsap.registerPlugin(ScrollTrigger);

export default function MainLayout() {
  useEffect(() => {
    // Trackpad-optimized physics engine initialization
    const lenis = new Lenis({
      lerp: 0.1, // Tight interpolation halts momentum drift
      wheelMultiplier: 0.8, // Dampens aggressive touchpad swipes
      syncTouch: true, // Replaces deprecated smoothTouch, locks momentum scaling
      smoothWheel: true,
    });

    // Delegate scroll sync directly to GSAP's ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Unify animation timelines by piping Lenis through GSAP's master ticker.
    // This eradicates desynchronization jitter between the DOM and WebGL canvas.
    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);

    // Prevent GSAP from attempting to "catch up" on animations if the user switches tabs,
    // which can cause massive layout jumps upon return.
    gsap.ticker.lagSmoothing(0);

    return () => {
      // Rigorous cleanup to prevent memory leaks during React hot-reloads
      lenis.destroy();
      gsap.ticker.remove(updateLenis);
    };
  }, []);

  return (
    <main className="relative w-full bg-transparent">
      <NavbarUI />

      {/* Optional Swiss Grid Overlay */}
      <SwissGridOverlay />

      {/* Fixed WebGL Canvas */}
      <div className="fixed top-0 left-0 w-full h-screen z-0 bg-transparent">
        <Scene />
      </div>

      {/* UI Content */}
      <div className="relative z-10 w-full bg-transparent pointer-events-none">
        <HeroUI />
        <SkillsUI />
        <ProjectsUI />
        <HackathonsUI />
        <CertificationsUI />
        <AboutUI />
        <ContactUI />
      </div>
    </main>
  );
}