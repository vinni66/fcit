import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

function BackgroundBubbles() {
  const { viewport } = useThree()
  const bubbles = useMemo(() => {
    return new Array(20).fill().map(() => ({
      position: [
        (Math.random() - 0.5) * viewport.width * 2,
        (Math.random() - 0.5) * viewport.height * 2,
        (Math.random() - 0.5) * 5
      ],
      scale: Math.random() * 0.5 + 0.2,
      speed: Math.random() * 0.5 + 0.1,
      distort: Math.random() * 0.4 + 0.2,
    }))
  }, [viewport])

  return (
    <>
      {bubbles.map((b, i) => (
        <Float key={i} speed={b.speed * 2} rotationIntensity={0.5} floatIntensity={1}>
          <Sphere position={b.position} scale={b.scale}>
            <MeshDistortMaterial
              color="#721C24"
              speed={b.speed}
              distort={b.distort}
              radius={1}
              opacity={0.15}
              transparent
            />
          </Sphere>
        </Float>
      ))}
    </>
  )
}

function Rig() {
  const { camera, mouse } = useThree()
  const vec = new THREE.Vector3()
  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 2, camera.position.z), 0.05)
    camera.lookAt(0, 0, 0)
  })
}

export default function ThreeHero() {
  return (
    <div className="absolute inset-0 -z-10 bg-fcit-400 overflow-hidden">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#DAA520" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#721C24" />
        <BackgroundBubbles />
        <Rig />
      </Canvas>
      {/* Subtle overlay to soften the 3D */}
      <div className="absolute inset-0 bg-gradient-to-b from-fcit-400/50 via-transparent to-fcit-400 pointer-events-none" />
    </div>
  )
}
