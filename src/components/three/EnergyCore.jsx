import { Canvas, useFrame } from "@react-three/fiber"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { useRef } from "react"
import * as THREE from "three"

function EnergyCoreMesh() {
  const core = useRef()
  const inner = useRef()
  const outer = useRef()

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime

    if (core.current) {
      core.current.rotation.x += delta * 0.25
      core.current.rotation.y += delta * 0.5

      const pulse = 1 + Math.sin(time * 3) * 0.045
      core.current.scale.setScalar(pulse)
    }

    if (inner.current) {
      inner.current.rotation.x -= delta * 0.7
      inner.current.rotation.y += delta * 0.9
    }

    if (outer.current) {
      outer.current.rotation.x += delta * 0.12
      outer.current.rotation.z += delta * 0.2
    }
  })

  return (
    <group>
      {/* Main energy core */}
      <mesh ref={core}>
        <icosahedronGeometry args={[1.15, 2]} />
        <meshStandardMaterial
          color="#39ff14"
          emissive="#19ff00"
          emissiveIntensity={4}
          metalness={0.35}
          roughness={0.18}
          toneMapped={false}
        />
      </mesh>

      {/* Inner rotating energy structure */}
      <mesh ref={inner} scale={0.72}>
        <icosahedronGeometry args={[1.15, 1]} />
        <meshBasicMaterial
          color="#d9ff00"
          wireframe
          transparent
          opacity={0.85}
          toneMapped={false}
        />
      </mesh>

      {/* Outer energy shell */}
      <mesh ref={outer} scale={1.45}>
        <icosahedronGeometry args={[1.15, 1]} />
        <meshBasicMaterial
          color="#39ff14"
          wireframe
          transparent
          opacity={0.16}
          toneMapped={false}
        />
      </mesh>

      {/* Soft green aura */}
      <mesh scale={1.7}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color="#39ff14"
          transparent
          opacity={0.035}
          side={THREE.BackSide}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>
    </group>
  )
}

export default function EnergyCore({
  className = "",
  height = "520px",
}) {
  return (
    <div
      className={`pointer-events-none w-full ${className}`}
      style={{ height }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <ambientLight intensity={0.2} />

        <pointLight
          position={[2, 2, 3]}
          intensity={18}
          color="#39ff14"
        />

        <pointLight
          position={[-2, -1, 2]}
          intensity={8}
          color="#7cff45"
        />

        <EnergyCoreMesh />

        <EffectComposer>
          <Bloom
            intensity={2.2}
            luminanceThreshold={0.05}
            luminanceSmoothing={0.7}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
