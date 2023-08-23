import styles from './page.module.css'

export const metadata = {
  title: 'Arseny Razin',
}
export default function Index() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Arseny Razin</h1>
    </main>
  )
}
