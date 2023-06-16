'use client'
import * as THREE from 'three'
import { useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera, View, Text3D, Center, AdaptiveDpr, AdaptiveEvents, useFont } from '@react-three/drei'
import fontTypeface from 'three/examples/fonts/helvetiker_regular.typeface.json'
import styles from './page.module.css'

export default function Client() {
  const containerRef = useRef<HTMLElement>(null)
  const trackingRef = useRef<HTMLElement>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
  })

  return (
    <div ref={containerRef as React.RefObject<HTMLDivElement>} className={styles.container}>
      <div ref={trackingRef as React.RefObject<HTMLDivElement>} className={styles.tracking} />
      <Canvas eventSource={containerRef as any} className={styles.canvas} style={{ position: 'fixed' }}>
        <Scene track={trackingRef} />
      </Canvas>
    </div>
  )
}

function Scene({ track }: { track: React.RefObject<HTMLElement> }) {
  const font = useFont(fontTypeface as any)
  const meshRef = useRef<THREE.Mesh>(null)
  const { viewport } = useThree()

  const space = viewport.width > viewport.height ? ' ' : '\n '

  const prev = new THREE.Vector3(0, 0, 1)
  const cur = prev.clone()
  useFrame(({ clock, pointer }) => {
    if (!meshRef?.current) {
      return
    }

    cur.x = THREE.MathUtils.lerp(prev.x, (pointer.x * viewport.width + Math.sin(clock.getElapsedTime())) / 10, 0.1)
    cur.y = THREE.MathUtils.lerp(prev.y, (pointer.y * viewport.height + Math.cos(clock.getElapsedTime())) / 10, 0.1)
    meshRef.current.lookAt(cur)
    prev.copy(cur)
  })

  return (
    <View track={track as any}>
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

      <ambientLight intensity={0.1} />
      <pointLight position={[20, 30, 20]} intensity={1} />
      <pointLight position={[-20, 30, -20]} intensity={0.5} />
      <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />

      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
    </View>
  )
}
