import styles from './page.module.css'

export const metadata = {
  title: 'razin.net',
}
export default function Index() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>razin.net</h1>
    </main>
  )
}
