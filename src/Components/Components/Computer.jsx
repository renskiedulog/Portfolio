import { Suspense, useEffect, useState } from "react";
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { CanvasLoader } from '../'

const Computer = () => {
    const computer = useGLTF('./desktop_pc/scene.gltf');
    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor="black" />
            <pointLight intensity={1} />
            <primitive object={computer.scene} />
        </mesh>
    )
}

const ComputerCanvas = () => {
    return (
        <Canvas className="computer-canvas" frameloop="demand" shadows camera={{ position: [20, 20, 5], fov: 30 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={ <CanvasLoader /> } >
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI /2} minPolarAngle={Math.PI / 2} />
                <Computer />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default ComputerCanvas;