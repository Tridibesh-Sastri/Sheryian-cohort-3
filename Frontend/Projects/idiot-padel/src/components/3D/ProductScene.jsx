import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  OrbitControls,
} from "@react-three/drei";

import ProductModel from "./ProductModel";

export default function ProductScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{
        position: [0, 0, 180],
        fov: 45,
        near: 0.1,
        far: 1000,
      }}
      gl={{
        antialias: true,
        powerPreference: "high-performance",
      }}
    >
      {/* Background */}

      <color attach="background" args={["#090909"]} />

      {/* Main studio light */}

      <directionalLight
        position={[50, 80, 100]}
        intensity={3}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* Fill light */}

      <directionalLight
        position={[-60, 30, 60]}
        intensity={1.5}
      />

      {/* Front light */}

      <pointLight
        position={[0, 20, 100]}
        intensity={1.2}
      />

      <Suspense fallback={null}>
        <ProductModel />

        <ContactShadows
          position={[0, -35, 0]}
          opacity={0.5}
          scale={180}
          blur={2.5}
          far={100}
        />

        <Environment preset="studio" />
      </Suspense>

      <OrbitControls
        enablePan={false}
        enableZoom
        enableRotate

        minDistance={90}
        maxDistance={260}

        minPolarAngle={Math.PI * 0.25}
        maxPolarAngle={Math.PI * 0.75}

        enableDamping
        dampingFactor={0.08}
      />
    </Canvas>
  );
}