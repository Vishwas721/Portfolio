import React from 'react';
import { Canvas } from '@react-three/fiber';
import KineticCodex from './KineticCodex';
import PostProcessingPipeline from './PostProcessingPipeline';

export default function Scene() {
  return (
    <div className="fixed inset-0 w-screen h-screen z-0">
      <Canvas
        camera={{ position: [0, 0, 0], fov: 75, near: 0.1, far: 100 }}
        gl={{
          antialias: false, // Disabled: Smoothing is handled mathematically by the halftone shader
          powerPreference: "high-performance",
          alpha: false, // Forcing an opaque canvas boosts composite rendering performance
          stencil: false, // Unnecessary for this scene structure
          depth: false // Depth testing is unnecessary for a singular inside-out primitive
        }}
        dpr={[1, 2]} // Clamp pixel ratio to 2 to prevent memory limits on 4K/Retina displays
      >
        <color attach="background" args={['#FFFFFF']} />
        
        {/* The 3D Typographic Geometry */}
        <KineticCodex />
        
        {/* The 1-Bit Halftone and Lens Distortion Compositor */}
        <PostProcessingPipeline />
      </Canvas>
    </div>
  );
}