
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

const NetworkBackground = () => {
  const count = 100;
  const meshRef = useRef<THREE.Points>(null!);
  const materialRef = useRef<THREE.PointsMaterial>(null!);
  
  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      temp[i * 3] = (Math.random() - 0.5) * 35;
      temp[i * 3 + 1] = (Math.random() - 0.5) * 35;
      temp[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return temp;
  }, []);

  const initialPositions = useMemo(() => new Float32Array(particles), [particles]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    meshRef.current.rotation.y = time * 0.02;

    if (materialRef.current) {
      materialRef.current.color.setHSL(0.65 + Math.sin(time * 0.1) * 0.03, 0.7, 0.4);
    }

    const positions = meshRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      positions[i * 3] = initialPositions[i * 3] + Math.sin(time * 0.5 + i) * 0.1;
      positions[i * 3 + 1] = initialPositions[i * 3 + 1] + Math.cos(time * 0.5 + i * 0.5) * 0.1;
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        ref={materialRef}
        size={0.15}
        color="#4338ca"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
};

const ThreeBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none opacity-30">
      <Canvas 
        camera={{ position: [0, 0, 15], fov: 60 }}
        gl={{ powerPreference: "high-performance", antialias: false }}
        dpr={[1, 1]}
      >
        <fog attach="fog" args={['#030712', 15, 40]} />
        <ambientLight intensity={0.4} />
        <Stars radius={100} depth={50} count={1500} factor={4} saturation={0} fade speed={0.8} />
        <NetworkBackground />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
