import React, { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Sphere,
  PerspectiveCamera,
  Html,
} from "@react-three/drei";
import * as THREE from "three";

const Centerpiece = ({
  location,
  phone,
}: {
  location?: string;
  phone?: string;
}) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  const { mouse } = useThree();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    const targetX = mouse.x * 0.15;
    const targetY = mouse.y * 0.15;

    meshRef.current.position.x = THREE.MathUtils.lerp(
      meshRef.current.position.x,
      targetX,
      0.05,
    );
    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      targetY,
      0.05,
    );

    const baseRotationX = time * 0.08;
    const baseRotationY = time * 0.12;

    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      baseRotationX + mouse.y * 0.08,
      0.05,
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      baseRotationY + mouse.x * 0.08,
      0.05,
    );

    const pulse = 1 + Math.sin(time * 0.5) * 0.03;
    const baseScale = hovered ? 1.25 : 1.1;
    const finalScale = baseScale * pulse;
    meshRef.current.scale.setScalar(
      THREE.MathUtils.lerp(meshRef.current.scale.x, finalScale, 0.06),
    );
  });

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.4}>
      <Sphere
        ref={meshRef}
        args={[1, 64, 64]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color={hovered ? "#6366f1" : "#4338ca"}
          attach="material"
          distort={0.2}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
          emissive="#1e1b4b"
          emissiveIntensity={0.4}
        />
      </Sphere>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.3, 0.003, 12, 64]} />
        <meshStandardMaterial color="#6366f1" transparent opacity={0.08} />
      </mesh>

      {/* Floating HTML badge with location/phone to make the scene meaningful */}
      <Html center distanceFactor={6} style={{ pointerEvents: "none" }}>
        <div className="select-none pointer-events-none bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-md text-sm font-medium shadow-lg">
          {location}
          {phone ? (
            <span className="ml-2 text-xs opacity-80">• {phone}</span>
          ) : null}
        </div>
      </Html>
    </Float>
  );
};

const HeroScene: React.FC<{ location?: string; phone?: string }> = ({
  location,
  phone,
}) => {
  return (
    <div className="w-full h-[420px] md:h-[520px] relative">
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ powerPreference: "high-performance", antialias: true }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#6366f1" />
        <Centerpiece location={location} phone={phone} />
      </Canvas>
    </div>
  );
};

export default HeroScene;
