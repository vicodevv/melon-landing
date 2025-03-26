// import type React from "react"
// import { Suspense } from "react"
// import { Canvas } from "@react-three/fiber"
// import { OrbitControls } from "@react-three/drei"
// import { Globe } from "./globe"

// export const GlobeContainer: React.FC = () => {
//   return (
//     <div className="absolute right-0 top-0 h-full w-1/2 md:w-2/5 lg:w-1/3 xl:w-2/5 overflow-hidden">
//       <div className="relative h-full w-full">
//         <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
//           <Suspense fallback={null}>
//             <ambientLight intensity={0.5} />
//             <Globe radius={1.2} color="#5B94E5" numConnections={15} />
//             <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} rotateSpeed={0.5} />
//           </Suspense>
//         </Canvas>
//       </div>
//     </div>
//   )
// }

