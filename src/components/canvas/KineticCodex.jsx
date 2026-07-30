import React, { useMemo, useRef, useLayoutEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function KineticCodex() {
  const meshRef = useRef();
  const materialRef = useRef();
  const { gl } = useThree();

  // Dynamically generate a 4K Hierarchical Texture with Baked Halftone Shadows
  const typographicTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    const size = 4096; // 4K resolution for razor-sharp macro typography
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    // 1. Stark white high-contrast background
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, size, size);

    ctx.fillStyle = '#000000';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // 2. Awwwards Hierarchy: Colossal Outer Rim -> Tiny Core Abyss
    const tiers = [
      { text: "VISHWAS K", size: 540, weight: "900", repeat: 2 },
      { text: "FULL-STACK ARCHITECT", size: 360, weight: "900", repeat: 2 },
      { text: "PERN STACK // AGENTIC AI // WEBGL", size: 220, weight: "800", repeat: 3 },
      { text: "POSTGRESQL // REACT // NODE // FASTAPI // LANGGRAPH", size: 140, weight: "700", repeat: 4 },
      { text: "DETERMINISTIC STATE ROUTING // LOCAL-FIRST PRIVACY // SWISS GRID", size: 85, weight: "700", repeat: 5 },
    ];

    const totalRows = 16;
    const rowHeight = size / totalRows;

    for (let i = 0; i < totalRows; i++) {
      const tier = tiers[i % tiers.length];
      ctx.font = `${tier.weight} ${tier.size}px "Helvetica Neue", Helvetica, Arial, sans-serif`;
      
      ctx.save();
      ctx.translate(size / 2, (i + 0.5) * rowHeight);
      const fullPhrase = `   ${tier.text}   `.repeat(tier.repeat);
      ctx.fillText(fullPhrase, 0, 0);
      ctx.restore();
    }

    // 3. THE SECRET WEAPON: Bake a vertical shadow gradient directly over the texture!
    // This gives the Halftone post-processing shader authentic depth gradients to convert
    // into dots at the center of the tunnel, WITHOUT blowing out the whole screen!
    const shadowGradient = ctx.createLinearGradient(0, 0, 0, size);
    shadowGradient.addColorStop(0.0, 'rgba(0, 0, 0, 0.0)');   // 0% shadow at outer rim
    shadowGradient.addColorStop(0.6, 'rgba(0, 0, 0, 0.15)');  // subtle mid-tunnel shading
    shadowGradient.addColorStop(1.0, 'rgba(0, 0, 0, 0.65)');  // deep shadow at center eye
    ctx.fillStyle = shadowGradient;
    ctx.fillRect(0, 0, size, size);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 2);
    texture.anisotropy = gl.capabilities.getMaxAnisotropy();
    texture.minFilter = THREE.LinearMipMapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.needsUpdate = true;

    return texture;
  }, [gl]);

  // GSAP ScrollTrigger: Camera pushes smoothly into Z-space without jitter
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(meshRef.current.position, {
        z: 14,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0,
        }
      });
    });
    return () => ctx.revert();
  }, []);

  // STATIONARY FUNNEL + REVOLVING TEXTURE UVs
  useFrame((_, delta) => {
    if (materialRef.current && materialRef.current.map) {
      // Revolve the text around the stationary tunnel walls
      materialRef.current.map.offset.x -= delta * 0.06;
      // Gently pull the letters inward toward the center eye
      materialRef.current.map.offset.y -= delta * 0.04;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={[0, 0, 1]}
      rotation={[Math.PI / 2, 0, 0]}
    >
      {/* 
        STATIONARY WHIRLPOOL GEOMETRY:
        radiusTop: 20 (Colossal outer opening filling the entire screen)
        radiusBottom: 4.5 (Dead-center, circular eye framing your Hero UI)
        height: 38
        radialSegments: 128 (Ultra-high polygon count for a mathematically perfect circle!)
      */}
      <cylinderGeometry args={[20, 4.5, 38, 128, 1, true]} />
      
      {/* 
        meshBasicMaterial + Baked Canvas Shading:
        Guarantees your text NEVER disappears into black polka-dots!
      */}
      <meshBasicMaterial
        ref={materialRef}
        map={typographicTexture}
        side={THREE.BackSide}
      />
    </mesh>
  );
}