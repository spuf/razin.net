'use client'

import { Suspense, useImperativeHandle, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Canvas } from '@react-three/fiber'
import { useCursor, MeshDistortMaterial, Preload, PerspectiveCamera, View } from '@react-three/drei'
import tunnel from 'tunnel-rat'

export default function Client() {
  const r3f = tunnel()
  const ref = useRef<HTMLElement | HTMLDivElement>(null)
  const router = useRouter()
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  const localRef = useRef<HTMLElement>(null)
  useImperativeHandle<HTMLElement | null, HTMLElement | null>(ref, () => localRef.current)

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'auto',
        touchAction: 'auto',
      }}
    >
      <>
        <div
          ref={localRef as React.RefObject<HTMLDivElement>}
          style={{
            height: '100vh',
          }}
        />
        <r3f.In>
          <View track={localRef as React.MutableRefObject<HTMLElement>}>
            <mesh onClick={() => router.push('/')} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
              <sphereGeometry args={[1, 64, 64]} />
              <MeshDistortMaterial roughness={0.5} color={hovered ? 'hotpink' : '#1fb2f5'} />
            </mesh>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <pointLight position={[20, 30, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} color="blue" />
              <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
            </Suspense>
          </View>
        </r3f.In>
      </>
      <Canvas
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
        }}
        eventSource={ref as React.MutableRefObject<HTMLElement>}
        eventPrefix="client"
      >
        <r3f.Out />
        <Preload all />
      </Canvas>
    </div>
  )
}
