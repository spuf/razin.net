import styles from './page.module.css'

export const metadata = {
  title: 'Arseny Razin',
}

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Arseny Razin</h1>
      </main>
    </div>
  )
}
