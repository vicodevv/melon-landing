// import React, { useRef, useMemo, useState } from 'react'
// import { useFrame } from '@react-three/fiber'
// import { Sphere, Line } from '@react-three/drei'
// import * as THREE from 'three'

// // Generate random points on the globe surface
// const getRandomPointOnSphere = (radius: number) => {
//   const theta = 2 * Math.PI * Math.random()
//   const phi = Math.acos(2 * Math.random() - 1)
//   return new THREE.Vector3(
//     radius * Math.sin(phi) * Math.cos(theta),
//     radius * Math.sin(phi) * Math.sin(theta),
//     radius * Math.cos(phi)
//   )
// }

// // Generate a random curve between two points on the globe
// const createCurve = (start: THREE.Vector3, end: THREE.Vector3) => {
//   // Create a control point above the direct path to make the curve arc outward
//   const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5)
//   const distance = start.distanceTo(end)
//   const normal = new THREE.Vector3().copy(mid).normalize()
//   const controlPoint = new THREE.Vector3().copy(normal).multiplyScalar(1 + distance * 0.3)
  
//   // Create a quadratic bezier curve
//   const curve = new THREE.QuadraticBezierCurve3(
//     start,
//     controlPoint,
//     end
//   )
  
//   return curve
// }

// interface ConnectionLineProps {
//   curve: THREE.QuadraticBezierCurve3
//   speed: number
//   color: string
// }

// // Animated connection line component
// const ConnectionLine: React.FC<ConnectionLineProps> = ({ curve, speed, color }) => {
//   const ref = useRef<THREE.Line>(null)
//   const [progress, setProgress] = useState(0)
  
//   // Pre-compute the full curve points
//   const curvePoints = useMemo(() => curve.getPoints(50), [curve])
  
//   useFrame((_, delta) => {
//     setProgress((prev) => (prev + delta * speed) % 1)
//   })
  
//   // Ensure we always have at least one point to avoid the array length error
//   const points = useMemo(() => {
//     const count = Math.max(1, Math.floor(curvePoints.length * progress))
//     return curvePoints.slice(0, count)
//   }, [curvePoints, progress])
  
//   // Only render the line if we have at least 2 points
//   if (points.length < 2) {
//     return null
//   }
  
//   return (
//     <Line
//       ref={ref}
//       points={points}
//       color={color}
//       lineWidth={1.5}
//       transparent
//       opacity={0.8}
//     />
//   )
// }

// interface GlobeProps {
//   radius?: number
//   detail?: number
//   color?: string
//   wireframe?: boolean
//   numConnections?: number
// }

// export const Globe: React.FC<GlobeProps> = ({
//   radius = 1,
//   detail = 48,
//   color = "#5B94E5",
//   wireframe = true,
//   numConnections = 10
// }) => {
//   const globeRef = useRef<THREE.Mesh>(null)
  
//   // Rotate the globe slowly
//   useFrame((_, delta) => {
//     if (globeRef.current) {
//       globeRef.current.rotation.y += delta * 0.1
//     }
//   })
  
//   // Generate random connections
//   const connections = useMemo(() => {
//     const lines = []
//     for (let i = 0; i < numConnections; i++) {
//       const start = getRandomPointOnSphere(radius)
//       const end = getRandomPointOnSphere(radius)
//       const curve = createCurve(start, end)
//       const speed = 0.1 + Math.random() * 0.2
//       lines.push({ curve, speed })
//     }
//     return lines
//   }, [radius, numConnections])
  
//   return (
//     <group>
//       <Sphere ref={globeRef} args={[radius, detail, detail]}>
//         <meshBasicMaterial 
//           color={color}
//           wireframe={wireframe}
//           transparent
//           opacity={0.6}
//         />
//       </Sphere>
      
//       {connections.map((connection, i) => (
//         <ConnectionLine
//           key={i}
//           curve={connection.curve}
//           speed={connection.speed}
//           color="#ffffff"
//         />
//       ))}
//     </group>
//   )
// }