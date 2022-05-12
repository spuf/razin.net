import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Arseny Razin</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Arseny Razin</h1>
      </main>
    </div>
  )
}

export default Home
