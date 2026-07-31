import React, { useEffect, useState } from "react";

export default function PaperRipTransition({ triggerKey }) {
  const [isRipping, setIsRipping] = useState(false);

  useEffect(() => {
    if (!triggerKey) return;
    // Trigger the tactile paper rip animation on section change
    setIsRipping(true);
    const timer = setTimeout(() => setIsRipping(false), 900);
    return () => clearTimeout(timer);
  }, [triggerKey]);

  if (!isRipping) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none flex flex-col overflow-hidden select-none">
      {/* TOP TORN PAPER FLAP */}
      <div className="w-full h-1/2 bg-[#111111] animate-rip-up relative flex items-end">
        {/* Jagged Torn Paper Edge SVG */}
        <svg
          className="w-full h-6 text-[#111111] translate-y-5 fill-current"
          viewBox="0 0 1200 30"
          preserveAspectRatio="none"
        >
          <path d="M0,0 L0,20 Q15,30 30,15 T60,25 T90,10 T120,28 T150,12 T180,25 T210,8 T240,22 T270,14 T300,28 T330,10 T360,24 T390,15 T420,27 T450,11 T480,26 T510,9 T540,23 T570,16 T600,29 T630,12 T660,25 T690,14 T720,28 T750,11 T780,24 T810,13 T840,27 T870,10 T900,26 T930,15 T960,28 T990,12 T1020,25 T1050,14 T1080,27 T1110,11 T1140,25 T1170,13 T1200,26 L1200,0 Z" />
        </svg>
      </div>

      {/* BOTTOM TORN PAPER FLAP */}
      <div className="w-full h-1/2 bg-[#111111] animate-rip-down relative flex items-start">
        <svg
          className="w-full h-6 text-[#111111] -translate-y-5 fill-current rotate-180"
          viewBox="0 0 1200 30"
          preserveAspectRatio="none"
        >
          <path d="M0,0 L0,20 Q15,30 30,15 T60,25 T90,10 T120,28 T150,12 T180,25 T210,8 T240,22 T270,14 T300,28 T330,10 T360,24 T390,15 T420,27 T450,11 T480,26 T510,9 T540,23 T570,16 T600,29 T630,12 T660,25 T690,14 T720,28 T750,11 T780,24 T810,13 T840,27 T870,10 T900,26 T930,15 T960,28 T990,12 T1020,25 T1050,14 T1080,27 T1110,11 T1140,25 T1170,13 T1200,26 L1200,0 Z" />
        </svg>
      </div>
    </div>
  );
}