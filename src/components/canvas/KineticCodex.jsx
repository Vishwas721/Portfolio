import React, { useMemo, useRef, useLayoutEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function KineticCodex({ isRipped }) {
  const topFlapRef = useRef();
  const bottomFlapRef = useRef();
  const materialRef = useRef();
  const { gl } = useThree();

  // 1. Generate 4K Hierarchical Texture
  const typographicTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    const size = 4096;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, size, size);
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

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

    // Baked Shadow Gradient
    const shadowGradient = ctx.createLinearGradient(0, 0, 0, size);
    shadowGradient.addColorStop(0.0, 'rgba(0, 0, 0, 0.0)');
    shadowGradient.addColorStop(0.6, 'rgba(0, 0, 0, 0.15)');
    shadowGradient.addColorStop(1.0, 'rgba(0, 0, 0, 0.65)');
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

  // 2. GSAP HORIZONTAL RIP TRIGGER
// GSAP 3D Z-AXIS PEEL: Halves rip and curl FORWARD toward the camera lens
// GSAP AUTO-RIP: Rips horizontally when Sidebar is clicked (isRipped === true)
  useLayoutEffect(() => {
    if (!topFlapRef.current || !bottomFlapRef.current) return;

    if (isRipped) {
      // 1. Rip top flap UP and TOWARD camera (+Z)
      gsap.to(topFlapRef.current.position, {
        y: 16,
        z: 10,
        duration: 1.2,
        ease: "power3.inOut",
      });

      // 2. Rip bottom flap DOWN and TOWARD camera (+Z)
      gsap.to(bottomFlapRef.current.position, {
        y: -16,
        z: 10,
        duration: 1.2,
        ease: "power3.inOut",
      });

      // 3. Fade out the torn poster
      gsap.to(materialRef.current, {
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
      });
    } else {
      // Reset back to intact Hero state if they navigate back to 01 // HERO
      gsap.to([topFlapRef.current.position, bottomFlapRef.current.position], {
        y: 0,
        z: 0,
        duration: 1.0,
        ease: "power2.out",
      });
      gsap.to(materialRef.current, { opacity: 1, duration: 0.5 });
    }
  }, [isRipped]);

  // 3. Texture UV Revolving Loop
  useFrame((_, delta) => {
    if (materialRef.current && materialRef.current.map) {
      materialRef.current.map.offset.x -= delta * 0.06;
      materialRef.current.map.offset.y -= delta * 0.04;
    }
  });

  return (
    <group>
      {/* TOP HALF FLAP */}
      <group ref={topFlapRef} position={[0, 0, 1]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[20, 4.5, 38, 128, 1, true, 0, Math.PI]} />
          <meshBasicMaterial
            ref={materialRef}
            map={typographicTexture}
            side={THREE.BackSide}
            transparent={true}
            opacity={1}
          />
        </mesh>
      </group>

      {/* BOTTOM HALF FLAP */}
      <group ref={bottomFlapRef} position={[0, 0, 1]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[20, 4.5, 38, 128, 1, true, Math.PI, Math.PI]} />
          <meshBasicMaterial
            map={typographicTexture}
            side={THREE.BackSide}
            transparent={true}
            opacity={1}
          />
        </mesh>
      </group>
    </group>
  );
}