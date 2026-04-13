import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera } from '@react-three/drei'
import { useScroll, useTransform } from 'framer-motion'
import * as THREE from 'three'

function BackgroundBubbles() {
  const { viewport } = useThree()
  const scroll = useScroll()
  
  // Create a transform that brings bubbles to the center as we scroll
  const scrollProgress = scroll.scrollYProgress
  
  const bubbles = useMemo(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024
    const count = isMobile ? 12 : 40
    return new Array(count).fill().map(() => ({
      position: [
        (Math.random() - 0.5) * viewport.width * (isMobile ? 1.5 : 3),
        (Math.random() - 0.5) * viewport.height * (isMobile ? 1.5 : 3),
        (Math.random() - 0.5) * (isMobile ? 5 : 10)
      ],
      scale: Math.random() * 0.4 + 0.1,
      speed: Math.random() * 0.3 + 0.1,
      distort: isMobile ? 0 : Math.random() * 0.5 + 0.3,
      color: Math.random() > 0.5 ? '#721C24' : '#DAA520'
    }))
  }, [viewport])

  const meshRef = useRef([])

  useFrame((state) => {
    const progress = scrollProgress.get()
    
    meshRef.current.forEach((mesh, i) => {
      if (!mesh) return
      
      const b = bubbles[i]
      // Lerp position towards center [0,0,0] as scroll increases
      const targetX = b.position[0] * (1 - progress * 0.8)
      const targetY = b.position[1] * (1 - progress * 0.8)
      const targetZ = b.position[2] * (1 - progress * 0.8)

      mesh.position.x = THREE.MathUtils.lerp(mesh.position.x, targetX, 0.05)
      mesh.position.y = THREE.MathUtils.lerp(mesh.position.y, targetY, 0.05)
      mesh.position.z = THREE.MathUtils.lerp(mesh.position.z, targetZ, 0.05)
      
      // Rotate bubbles slowly
      mesh.rotation.x += 0.001
      mesh.rotation.y += 0.002
    })
  })

  return (
    <>
      {bubbles.map((b, i) => (
        <Sphere 
          key={i} 
          ref={el => meshRef.current[i] = el}
          position={b.position} 
          scale={b.scale}
        >
          {b.distort > 0 ? (
            <MeshDistortMaterial
              color={b.color}
              speed={b.speed * 2}
              distort={b.distort}
              radius={1}
              opacity={0.3}
              transparent
              metalness={0.8}
              roughness={0.2}
            />
          ) : (
            <meshStandardMaterial
              color={b.color}
              transparent
              opacity={0.4}
              metalness={0.5}
              roughness={0.5}
            />
          )}
        </Sphere>
      ))}
    </>
  )
}

function Rig() {
  const { camera, mouse, pointer } = useThree()
  const lightRef = useRef()
  const vec = new THREE.Vector3()

  useFrame((state) => {
    const isMobile = window.innerWidth < 1024
    if (isMobile) return

    // Camera parralax
    camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 2, camera.position.z), 0.05)
    camera.lookAt(0, 0, 0)

    // Light follows mouse
    if (lightRef.current) {
      lightRef.current.position.set(mouse.x * 10, mouse.y * 10, 5)
    }
  })

  return (
    <>
      <pointLight ref={lightRef} intensity={2} color="#DAA520" shadow-blur={20} />
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#721C24" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#DAA520" />
    </>
  )
}

export default function ThreeHero() {
  return (
    <div className="absolute inset-0 -z-10 bg-[#0f172a] overflow-hidden">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        <BackgroundBubbles />
        <Rig />
      </Canvas>
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f172a]/20 to-[#0f172a] pointer-events-none" />
    </div>
  )
}
