import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Scene from "../components/canvas/Scene";
import HeroUI from "../components/ui/HeroUI";

export default function MainLayout() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      smoothTouch: false,
      lerp: 0.08,
    });

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
    <div className="relative w-screen h-screen overflow-hidden bg-transparent">
      <div className="fixed top-0 left-0 w-screen h-screen -z-10 bg-transparent">
        <Scene />
      </div>

      <div className="absolute inset-0 z-10 overflow-y-auto bg-transparent">
        <HeroUI />
        <div className="h-[300vh]"></div>
      </div>
    </div>
  );
}