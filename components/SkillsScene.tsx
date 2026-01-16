import React, {
  useRef,
  useMemo,
  useState,
  Suspense,
  ReactNode,
  Component,
} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Stars,
  PerspectiveCamera,
  Decal,
  useTexture,
  OrbitControls,
} from "@react-three/drei";
import * as THREE from "three";
import { SKILL_CATEGORIES_EXTENDED, SkillDetail } from "../types/constants";

// Physics constants - Slightly reduced for performance
const BOUNDS = { x: 4.5, y: 2.8, z: 1.8 };
const RADIUS = 0.5;
const SPEED_MULT = 0.015;

interface PhysicsNode {
  skill: SkillDetail;
  position: THREE.Vector3;
  velocity: THREE.Vector3;
}

const SkillNode = ({
  node,
  onHover,
}: {
  node: PhysicsNode;
  onHover: (skill: SkillDetail | null) => void;
}) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  // Iconify PNG endpoint provides reliable raster textures for Three.js
  const textureUrl = `${node.skill.img}`;
  const texture = useTexture(textureUrl);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.copy(node.position);
      meshRef.current.rotation.y += 0.008;
      meshRef.current.rotation.x += 0.003;
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => onHover(node.skill)}
      onPointerOut={() => onHover(null)}
    >
      <sphereGeometry args={[RADIUS, 24, 24]} />
      <meshStandardMaterial
        color={node.skill.color}
        emissive={node.skill.color}
        emissiveIntensity={0.2}
        roughness={0.15}
        metalness={0.85}
      />
      {texture && (
        <>
          <Decal
            position={[0, 0, RADIUS - 0.01]}
            rotation={[0, 0, 0]}
            scale={[0.6, 0.6, 0.6]}
            map={texture}
          />
          <Decal
            position={[0, 0, -(RADIUS - 0.01)]}
            rotation={[0, Math.PI, 0]}
            scale={[0.6, 0.6, 0.6]}
            map={texture}
          />
        </>
      )}
    </mesh>
  );
};

const SkillPlaceholder = ({ node }: { node: PhysicsNode }) => (
  <mesh position={node.position}>
    <sphereGeometry args={[RADIUS - 0.05, 12, 12]} />
    <meshStandardMaterial color={node.skill.color} transparent opacity={0.3} />
  </mesh>
);

interface SkillErrorBoundaryProps {
  children?: ReactNode;
  fallback: ReactNode;
}

interface SkillErrorBoundaryState {
  hasError: boolean;
}

// Fix: Explicitly use imported Component and define props/state generics to resolve TypeScript errors
// where property 'state' or 'props' are not recognized and JSX attributes like 'key' fail validation.
class SkillErrorBoundary extends Component<
  SkillErrorBoundaryProps,
  SkillErrorBoundaryState
> {
  constructor(props: SkillErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: any): SkillErrorBoundaryState {
    return { hasError: true };
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const PhysicsContainer = ({
  onHover,
}: {
  onHover: (skill: SkillDetail | null) => void;
}) => {
  const nodes = useMemo(() => {
    return SKILL_CATEGORIES_EXTENDED.flatMap((cat) =>
      cat.skills.map((skill) => ({
        skill,
        position: new THREE.Vector3(
          (Math.random() - 0.5) * BOUNDS.x * 2,
          (Math.random() - 0.5) * BOUNDS.y * 2,
          (Math.random() - 0.5) * BOUNDS.z * 2
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * SPEED_MULT,
          (Math.random() - 0.5) * SPEED_MULT,
          (Math.random() - 0.5) * SPEED_MULT
        ),
      }))
    );
  }, []);

  useFrame(() => {
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];

      a.position.add(a.velocity);

      // Boundaries with damping
      if (Math.abs(a.position.x) > BOUNDS.x) {
        a.velocity.x *= -0.9;
        a.position.x = Math.sign(a.position.x) * BOUNDS.x;
      }
      if (Math.abs(a.position.y) > BOUNDS.y) {
        a.velocity.y *= -0.9;
        a.position.y = Math.sign(a.position.y) * BOUNDS.y;
      }
      if (Math.abs(a.position.z) > BOUNDS.z) {
        a.velocity.z *= -0.9;
        a.position.z = Math.sign(a.position.z) * BOUNDS.z;
      }

      // Inter-node collisions
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const dist = a.position.distanceTo(b.position);
        const minDist = RADIUS * 2.1;

        if (dist < minDist) {
          const normal = a.position.clone().sub(b.position).normalize();
          const relativeVelocity = a.velocity.clone().sub(b.velocity);
          const velocityAlongNormal = relativeVelocity.dot(normal);

          if (velocityAlongNormal < 0) {
            const impulse = normal.multiplyScalar(velocityAlongNormal * 0.95);
            a.velocity.sub(impulse);
            b.velocity.add(impulse);
          }

          const overlap = minDist - dist;
          const separation = normal.clone().multiplyScalar(overlap / 2);
          a.position.add(separation);
          b.position.sub(separation);
        }
      }
    }
  });

  return (
    <>
      {nodes.map((node, i) => (
        <SkillErrorBoundary
          key={`${node.skill.icon}-${i}`}
          fallback={<SkillPlaceholder node={node} />}
        >
          <Suspense fallback={<SkillPlaceholder node={node} />}>
            <SkillNode node={node} onHover={onHover} />
          </Suspense>
        </SkillErrorBoundary>
      ))}
    </>
  );
};

const Tooltip = ({ skill }: { skill: SkillDetail | null }) => {
  if (!skill) return null;
  return (
    <div className="absolute top-10 right-10 bg-gray-950/90 backdrop-blur-xl border border-indigo-500/40 p-5 rounded-2xl shadow-2xl max-w-xs pointer-events-none animate-in fade-in slide-in-from-right-4 duration-300 z-20 ring-1 ring-white/10">
      <div className="flex items-center space-x-3 mb-3">
        <div className="p-2 bg-indigo-500/20 rounded-lg border border-indigo-500/30">
          <img src={skill.img} className="w-6 h-6" alt={skill.name} />
        </div>
        <h4 className="text-white font-bold text-xl">{skill.name}</h4>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed font-medium">
        {skill.description}
      </p>
    </div>
  );
};

const SkillsScene: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<SkillDetail | null>(null);

  return (
    <div className="w-full flex justify-center">
      <div className="h-100 md:h-150 w-full md:w-2/3 mt-5 border border-gray-800 rounded-3xl bg-gray-950/60 overflow-hidden relative group shadow-2xl">
        <Canvas
          dpr={[1, 1.5]}
          gl={{
            powerPreference: "high-performance",
            antialias: false,
            alpha: true,
          }}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={1.5} />
          <pointLight position={[-5, -5, -5]} color="#4338ca" intensity={1} />
          <Stars
            radius={50}
            depth={50}
            count={1000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
          <PhysicsContainer onHover={setHoveredSkill} />

          <mesh>
            <boxGeometry
              args={[
                BOUNDS.x * 2 + RADIUS * 2,
                BOUNDS.y * 2 + RADIUS * 2,
                BOUNDS.z * 2 + RADIUS * 2,
              ]}
            />
            <meshBasicMaterial
              color="#6366f1"
              wireframe
              transparent
              opacity={0.02}
            />
          </mesh>
        </Canvas>

        <Tooltip skill={hoveredSkill} />

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-indigo-950/80 backdrop-blur-md rounded-full border border-indigo-500/30 text-[10px] uppercase tracking-widest text-indigo-200 font-bold z-10 select-none shadow-lg">
          Interactive 3D Workspace • Drag to rotate
        </div>
      </div>
    </div>
  );
};

export default SkillsScene;
