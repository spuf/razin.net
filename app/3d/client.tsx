'use client'
import * as THREE from 'three'
import { Suspense, useImperativeHandle, useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
  Preload,
  PerspectiveCamera,
  View,
  Text3D,
  Center,
  AdaptiveDpr,
  AdaptiveEvents,
  useFont,
} from '@react-three/drei'
import tunnelRat from 'tunnel-rat'
import fontTypeface from 'three/examples/fonts/helvetiker_regular.typeface.json'
import styles from './page.module.css'

const tunnel = tunnelRat()

export default function Client() {
  const wrapperRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLElement>(null)
  useImperativeHandle<HTMLElement | null, HTMLElement | null>(wrapperRef, () => containerRef.current)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
  })

  return (
    <div ref={wrapperRef as React.RefObject<HTMLDivElement>} className={styles.wrapper}>
      <div ref={containerRef as React.RefObject<HTMLDivElement>} className={styles.container}>
        <tunnel.In>
          <ClientView containerRef={containerRef} />
        </tunnel.In>
      </div>
      <Canvas
        className={styles.canvas}
        style={{ position: 'fixed' }}
        eventSource={wrapperRef as any}
        eventPrefix="client"
      >
        <tunnel.Out />
      </Canvas>
    </div>
  )
}

function ClientView({ containerRef }: { containerRef: React.RefObject<HTMLElement> }) {
  const font = useFont(fontTypeface as any)
  const meshRef = useRef<THREE.Mesh>(null)
  const { viewport } = useThree()
  const z = 1
  const prev = new THREE.Vector3(0, 0, z)
  const space = viewport.width > viewport.height ? ' ' : '\n '
  useFrame(({ clock, pointer }) => {
    if (!meshRef?.current) {
      return
    }

    const cur = new THREE.Vector3(
      THREE.MathUtils.lerp(prev.x, (pointer.x * viewport.width + Math.sin(clock.getElapsedTime())) / 10, 0.1),
      THREE.MathUtils.lerp(prev.y, (pointer.y * viewport.height + Math.cos(clock.getElapsedTime())) / 10, 0.1),
      z
    )
    meshRef.current.lookAt(cur)
    prev.copy(cur)
  })

  return (
    <View track={containerRef as any}>
      <mesh ref={meshRef as any}>
        <Center>
          <Text3D
            font={font.data}
            size={0.5}
            height={0.01}
            curveSegments={20}
            bevelEnabled
            bevelThickness={0.05}
            bevelSize={0.02}
            bevelSegments={20}
          >
            Arseny{space}Razin
            <meshPhongMaterial color={'black'} specular={'white'} shininess={30} />
          </Text3D>
        </Center>
      </mesh>

      <Suspense fallback={null}>
        <ambientLight intensity={0.1} />
        <pointLight position={[20, 30, 20]} intensity={1} />
        <pointLight position={[-20, 30, -20]} intensity={0.5} />
        <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
        <Preload all />
      </Suspense>
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
    </View>
  )
}
