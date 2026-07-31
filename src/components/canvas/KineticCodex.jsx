import React, { useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
export default function KineticCodex() {
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

  // 3. Texture UV Revolving Loop
  useFrame((_, delta) => {
    if (materialRef.current && materialRef.current.map) {
      materialRef.current.map.offset.x -= delta * 0.06;
      materialRef.current.map.offset.y -= delta * 0.04;
    }
  });

  return (
    <group>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 1]}>
        <cylinderGeometry args={[20, 4.5, 38, 128, 1, true, 0, Math.PI * 2]} />
        <meshBasicMaterial
          ref={materialRef}
          map={typographicTexture}
          side={THREE.BackSide}
          transparent={true}
          opacity={1}
        />
      </mesh>
    </group>
  );
}