import { Canvas } from "@react-three/fiber";

export default function Scene() {
  return (
    <Canvas
      className="h-full w-full"
      dpr={[1, 2]}
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: true, alpha: false }}
      style={{ background: "#050505" }}
    >
      <fog attach="fog" args={["#050505", 5, 15]} />
      <ambientLight intensity={0.65} />
      <directionalLight position={[4, 6, 8]} intensity={2.25} color="#f5f3ff" />

      <mesh position={[0, 0, 0]} rotation={[0.35, 0.55, 0]}>
        <icosahedronGeometry args={[1.25, 1]} />
        <meshStandardMaterial
          color="#f5f3ff"
          wireframe
          roughness={0.25}
          metalness={0.1}
        />
      </mesh>
    </Canvas>
  );
}