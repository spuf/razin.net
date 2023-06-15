'use client'
import * as THREE from 'three'
import { Suspense, useImperativeHandle, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Preload, PerspectiveCamera, View, Text3D, Center, AdaptiveDpr, AdaptiveEvents } from '@react-three/drei'
import tunnelRat from 'tunnel-rat'

const tunnel = tunnelRat()

export default function Client() {
  const wrapperRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLElement>(null)
  useImperativeHandle<HTMLElement | null, HTMLElement | null>(wrapperRef, () => containerRef.current)

  return (
    <div
      ref={wrapperRef as React.RefObject<HTMLDivElement>}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'auto',
        touchAction: 'auto',
      }}
    >
      <div
        ref={containerRef as React.RefObject<HTMLDivElement>}
        style={{
          height: '100vh',
        }}
      >
        <tunnel.In>
          <ClientView containerRef={containerRef} />
        </tunnel.In>
      </div>
      <Canvas
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
        }}
        eventSource={wrapperRef as any}
        eventPrefix="client"
      >
        <tunnel.Out />
      </Canvas>
    </div>
  )
}

function ClientView({ containerRef }: { containerRef: React.RefObject<HTMLElement> }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const { viewport } = useThree()
  useFrame(({ clock, mouse }) => {
    if (!meshRef?.current) {
      return
    }
    const x = (mouse.x * viewport.width) / 10
    const y = (mouse.y * viewport.height) / 10
    meshRef.current.lookAt(x, y, 1)
    meshRef.current.rotation.x += Math.cos(clock.getElapsedTime() / 4) / 10
    meshRef.current.rotation.y += Math.sin(clock.getElapsedTime() / 2) / 10
  })

  return (
    <View track={containerRef as any}>
      <mesh ref={meshRef as any}>
        <Center>
          <Text3D
            font={'/helvetiker_regular.typeface.json'}
            size={0.5}
            height={0.01}
            curveSegments={20}
            bevelEnabled
            bevelThickness={0.05}
            bevelSize={0.02}
            bevelSegments={20}
          >
            Arseny Razin
            <meshPhongMaterial color={'black'} specular={'white'} shininess={30} />
          </Text3D>
        </Center>
      </mesh>

      <Suspense fallback={null}>
        <ambientLight intensity={0.1} />
        <pointLight position={[20, 30, 10]} intensity={1} />
        <pointLight position={[-20, 30, -10]} intensity={0.5} />
        <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
        <Preload all />
      </Suspense>
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
    </View>
  )
}
