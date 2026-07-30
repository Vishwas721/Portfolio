import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Scene from "../components/canvas/Scene";
import NavbarUI from "../components/ui/NavbarUI";
import HeroUI from "../components/ui/HeroUI";
import SkillsUI from "../components/ui/SkillsUI";
import ProjectsUI from "../components/ui/ProjectsUI";
import HackathonsUI from "../components/ui/HackathonsUI";
import CertificationsUI from "../components/ui/CertificationsUI";
import AboutUI from "../components/ui/AboutUI";
import ContactUI from "../components/ui/ContactUI";

gsap.registerPlugin(ScrollTrigger);

export default function MainLayout() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      smoothTouch: false,
      lerp: 0.08,
    });

    lenis.on("scroll", ScrollTrigger.update);

    let rafId = 0;

    const raf = (time) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    rafId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative w-full">
      <NavbarUI />

      <div className="fixed top-0 left-0 w-full h-screen z-0 bg-transparent">
        <Scene />
      </div>

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