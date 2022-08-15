import { createRoot as createCanvasRoot, events, Canvas } from '@react-three/fiber'
import Backdrop from '@/components/backdrop/Backdrop'
import React from 'react'
export default function ThreePage() {
  return (
    <Canvas
      style={{ width: '100vw', height: '100vh' }}
      orthographic={true}
      events={events}
      gl={{
        powerPreference: 'high-performance',
        antialias: false,
        stencil: false,
        alpha: false,
        depth: false,
      }}
      camera={{
        zoom: 5,
        position: [0, 0, 200],
        far: 300,
        near: 0,
      }}
    >
      <Backdrop />
    </Canvas>
  )
}
