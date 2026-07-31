import React from "react";
import { Canvas } from "@react-three/fiber";
import KineticCodex from "./KineticCodex";
import IsoLab from "./IsoLab";
import PostProcessingPipeline from "./PostProcessingPipeline";

export default function Scene({ activeSection }) {
  return (
    <div className="fixed inset-0 w-screen h-screen z-0">
      <Canvas
        camera={{ position: [0, 0, 0], fov: 75, near: 0.1, far: 100 }}
        gl={{
          antialias: true, // Re-enabled antialias for crisp pastel 3D desk edges
          powerPreference: "high-performance",
          alpha: false,
          depth: true,
        }}
        dpr={[1, 2]}
      >
        <color attach="background" args={["#F4F6F8"]} />

        {/* Clean Studio Lighting for the Pastel Workbench */}
        <ambientLight intensity={0.9} color="#FFFFFF" />
        <directionalLight position={[10, 15, 10]} intensity={2.2} color="#FFFFFF" />
        <pointLight position={[-6, 8, -6]} intensity={1.5} color="#007AFF" />

        {/* Section 01: Only show Kinetic Codex when Section 1 is active */}
        {activeSection === 1 && <KineticCodex isRipped={false} />}

        {/* Section 02: IsoLab Workbench appears cleanly when we rip to Section 2 */}
        {activeSection >= 2 && <IsoLab />}

        {/* Only apply Halftone Dither to Section 01 so the Pastel Desk stays colorful! */}
        {activeSection === 1 && <PostProcessingPipeline />}
      </Canvas>
    </div>
  );
}