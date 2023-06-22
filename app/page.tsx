import Client from './client'
import { Suspense } from 'react'
import styles from './page.module.css'

export const metadata = {
  title: 'Arseny Razin',
}
export default function Index() {
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
