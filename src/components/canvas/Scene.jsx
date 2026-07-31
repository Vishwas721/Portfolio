import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, SoftShadows } from "@react-three/drei";
import * as THREE from "three";

import KineticCodex from "../sections/section01_hero/KineticCodex";
import IsoLab from "../sections/section02_skills/IsoLab";
import PostProcessingPipeline from "./PostProcessingPipeline";


export default function Scene({ activeSection, transitionKey, onMidpoint, onComplete }) {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 14], fov: 65, near: 0.1, far: 100 }}
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
        outputColorSpace: THREE.SRGBColorSpace,
      }}
    >
      <color attach="background" args={[activeSection === 1 ? "#FFFFFF" : "#F4F6F8"]} />



      {/* Studio Lighting */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 15, 10]} intensity={2.2} castShadow />
      <pointLight position={[-6, 8, -6]} intensity={1.5} color="#007AFF" />
      <SoftShadows size={10} samples={12} focus={0.5} />
      <Environment preset="studio" />

      <Suspense fallback={null}>
        {activeSection === 1 && (
          <group position={[0, 0, 0]}>
            <KineticCodex />
          </group>
        )}

        {activeSection === 2 && (
          <group position={[0, 0, 0]}>
            <IsoLab />
          </group>
        )}

        {activeSection === 1 && <PostProcessingPipeline />}
      </Suspense>
    </Canvas>
  );
}