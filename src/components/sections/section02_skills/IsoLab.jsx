import React, { useRef, useState } from "react";
import * as THREE from "three";
import { RoundedBox, Text, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

// INTERACTIVE TOUCHPAD-REACTIVE SKILL CARTRIDGE
function SkillCartridge({ position, label, sublabel, color, textColor = "#FFFFFF", size = [2.6, 0.45, 1.3] }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Touchpad Cursor Reactivity: Smoothly scale up when hovered
  useFrame((_, delta) => {
    if (!meshRef.current) return;
    const targetScale = hovered ? 1.08 : 1.0;
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 10);
  });

  // Touchpad Click Action: Do a full 360° mechanical spin when clicked!
  const handleClick = (e) => {
    e.stopPropagation();
    if (!meshRef.current) return;
    gsap.to(meshRef.current.rotation, {
      y: meshRef.current.rotation.y + Math.PI * 2,
      duration: 0.6,
      ease: "back.out(1.7)",
    });
  };

  return (
    <Float speed={2.0} rotationIntensity={hovered ? 0.6 : 0.2} floatIntensity={0.5}>
      <group
        ref={meshRef}
        position={position}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "auto";
        }}
        onClick={handleClick}
      >
        {/* Main Cartridge Body with Hover Brightening */}
        <RoundedBox args={size} radius={0.1} smoothness={4}>
          <meshStandardMaterial
            color={hovered ? "#00E5FF" : color}
            roughness={0.25}
            metalness={0.15}
          />
        </RoundedBox>

        {/* Primary Skill Label */}
        <Text
          position={[0, size[1] / 2 + 0.05, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          fontSize={0.22}
          fontWeight={900}
          letterSpacing={0.05}
          color={hovered ? "#000000" : textColor}
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>

        {/* Sub-label Details */}
        {sublabel && (
          <Text
            position={[0, size[1] / 2 + 0.05, 0.3]}
            rotation={[-Math.PI / 2, 0, 0]}
            fontSize={0.11}
            fontWeight={700}
            letterSpacing={0.06}
            color={hovered ? "#000000" : textColor}
            fillOpacity={0.8}
            anchorX="center"
            anchorY="middle"
          >
            {sublabel}
          </Text>
        )}
      </group>
    </Float>
  );
}

export default function IsoLab() {
  return (
    <group
      // PERFECT ISOMETRIC FRAMING: Pushed back to z = -7 and scaled to 0.75 so NOTHING clips!
      position={[0, -0.8, -7]}
      rotation={[-0.45, 0.6, 0]}
      scale={0.75}
    >
      {/* Bright Studio Lighting */}
      <directionalLight position={[8, 12, 8]} intensity={2.5} color="#FFFFFF" />
      <pointLight position={[-6, 6, -6]} intensity={1.8} color="#007AFF" />

      {/* 1. DESK TABLETOP */}
      <RoundedBox args={[14, 0.5, 8]} radius={0.2} smoothness={4} position={[0, -0.3, 0]}>
        <meshStandardMaterial color="#E8ECEF" roughness={0.3} metalness={0.1} />
      </RoundedBox>

      {/* 2. SLATE DESK MAT */}
      <RoundedBox args={[11, 0.06, 5.5]} radius={0.12} smoothness={4} position={[0, 0.02, 0]}>
        <meshStandardMaterial color="#282C34" roughness={0.5} metalness={0.2} />
      </RoundedBox>

      {/* 3. INTERACTIVE TOUCHPAD-REACTIVE SKILL CARTRIDGES */}
      {/* Mustard Yellow - Core Architecture */}
      <SkillCartridge
        position={[-3.2, 1.0, -1.2]}
        label="PERN STACK"
        sublabel="POSTGRES // EXPRESS // REACT // NODE"
        color="#FFBA00"
        textColor="#000000"
      />

      {/* Cerulean Blue - Agentic AI Workflows */}
      <SkillCartridge
        position={[2.8, 1.4, -1.4]}
        label="AGENTIC AI"
        sublabel="LANGGRAPH // FASTAPI // RAG"
        color="#007AFF"
        textColor="#FFFFFF"
      />

      {/* Deep Slate - Databases & Vector Search */}
      <SkillCartridge
        position={[-1.8, 1.2, 1.4]}
        label="POSTGRESQL"
        sublabel="PGVECTOR // DETERMINISTIC ROUTING"
        color="#1E222A"
        textColor="#FFFFFF"
      />

      {/* Mustard Yellow - WebGL Systems */}
      <SkillCartridge
        position={[2.4, 0.9, 1.2]}
        label="WEBGL SYSTEMS"
        sublabel="THREE.JS // R3F // TAILWIND // GSAP"
        color="#FFBA00"
        textColor="#000000"
      />

      {/* Center Studio White Badge */}
      <SkillCartridge
        position={[0, 1.8, 0]}
        label="LOCAL-FIRST PRIVACY"
        sublabel="ZERO-LATENCY ARCHITECTURE"
        color="#FFFFFF"
        textColor="#000000"
      />
    </group>
  );
}