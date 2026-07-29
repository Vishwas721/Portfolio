import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, PerspectiveCamera, Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

function CameraController() {
  const cameraRef = useRef(null);

  useEffect(() => {
    if (!cameraRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(cameraRef.current.position, {
        z: 3.2,
        y: -0.3,
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 5]} fov={75} />;
}

function MouseParallax({ children }) {
  const groupRef = useRef(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Target tilt angles based on normalized cursor coordinates (-1 to 1)
    const targetX = (state.pointer.x * Math.PI) / 10;
    const targetY = (state.pointer.y * Math.PI) / 10;

    // Smoothly lerp current group rotation toward pointer coordinates
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetX,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -targetY,
      0.05
    );
  });

  return <group ref={groupRef}>{children}</group>;
}

function KineticMesh() {
  const meshRef = useRef(null);
  const { viewport } = useThree();
  const isMobile = viewport.width < 5;
  const baseScale = isMobile ? 0.7 : 1;

  useEffect(() => {
    if (!meshRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(meshRef.current.rotation, {
        x: Math.PI * 1.5,
        y: Math.PI * 2,
        z: Math.PI * 0.5,
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      gsap.to(meshRef.current.position, {
        y: -1.25,
        z: 1.8,
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Float speed={1.75} rotationIntensity={0.5} floatIntensity={0.75}>
      <mesh ref={meshRef} position={[0, 0, 0]} rotation={[0.35, 0.55, 0]} scale={baseScale}>
        <icosahedronGeometry args={[1.25, 1]} />
        <meshStandardMaterial
          color="#f5f3ff"
          wireframe
          roughness={0.25}
          metalness={0.1}
        />
      </mesh>
    </Float>
  );
}

export default function Scene() {
  const isTouchDevice =
    typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
  const pixelRatio = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
  const dpr = [1, isTouchDevice ? Math.min(pixelRatio, 1.5) : Math.min(pixelRatio, 2)];

  return (
    <Canvas
      className="h-full w-full"
      dpr={dpr}
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      style={{ background: "#050505" }}
      eventSource={document.body}
      eventPrefix="client"
    >
      <CameraController />
      <fog attach="fog" args={["#050505", 5, 15]} />
      <ambientLight intensity={0.65} />
      <directionalLight position={[4, 6, 8]} intensity={2.25} color="#f5f3ff" />
      <Environment preset="city" />

      <MouseParallax>
        <Sparkles
          count={180}
          scale={12}
          size={2.5}
          speed={0.4}
          opacity={0.65}
          color="#22d3ee"
        />

        <KineticMesh />
      </MouseParallax>
    </Canvas>
  );
}