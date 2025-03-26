"use client"

import { Suspense, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Preload, useTexture, Sphere } from "@react-three/drei"
import * as THREE from "three"

const Earth = () => {
  const earthRef = useRef<THREE.Mesh>(null)
  const [isRotating, setIsRotating] = useState(true)
  
  // Load Earth texture - only use the one we have available
  const colorMap = useTexture("/images/texture-earth.jpg")
  
  // Auto-rotation
  useFrame(({ clock }) => {
    if (earthRef.current && isRotating) {
      earthRef.current.rotation.y = clock.getElapsedTime() * 0.1
    }
  })
  
  return (
    <group>
      {/* Earth sphere */}
      <Sphere ref={earthRef} args={[2.5, 64, 64]} onClick={() => setIsRotating(!isRotating)}>
        <meshStandardMaterial map={colorMap} metalness={0.4} roughness={0.7} />
      </Sphere>
      
      {/* Atmosphere glow */}
      <Sphere args={[2.6, 64, 64]}>
        <meshPhongMaterial color="#4ca6ff" opacity={0.1} transparent side={THREE.BackSide} />
      </Sphere>
    </group>
  )
}

export const EarthCanvas = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        shadows
        frameloop="always"
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [4, 3, 6],
        }}
      >
        <Suspense fallback={null}>
          <OrbitControls 
            autoRotate={false} 
            enableZoom={false} 
            maxPolarAngle={Math.PI / 1.8} 
            minPolarAngle={Math.PI / 2.5}
            enablePan={false}
            rotateSpeed={0.4}
          />
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 3, 5]} intensity={1.5} castShadow />
          <pointLight position={[-10, 0, -20]} intensity={0.5} />
          <pointLight position={[0, -10, 0]} intensity={0.5} />
          <Earth />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}