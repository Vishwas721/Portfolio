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
    <div className="relative isolate h-screen w-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-0 z-[-20] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_40%),linear-gradient(to_bottom,_rgba(15,23,42,0.96),_rgba(2,6,23,1))]" />

      <div className="absolute inset-0 -z-10">
        <Scene />
      </div>

      <div className="absolute inset-0 z-10 w-full overflow-y-auto bg-transparent">
        <HeroUI />
        <div className="h-[300vh]" />
      </div>
    </div>
  );
}