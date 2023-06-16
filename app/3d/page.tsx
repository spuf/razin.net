import Client from './client'
import { Suspense } from 'react'
import styles from '../page.module.css'

export const metadata = {
  title: 'Arseny Razin',
  robots: {
    index: false,
  },
}
export default function ThreeD() {
  return (
    <Suspense
      fallback={
        <div className={styles.container}>
          <main className={styles.main}>
            <h1 className={styles.title}>Arseny Razin</h1>
          </main>
        </div>
      }
    >
      <Client />
    </Suspense>
  )
}
