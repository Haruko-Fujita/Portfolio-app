import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Portfolio</h1>
        <Link href="/MyPage" className={styles.card}>MyPage</Link>
        <Link href="/login" className={styles.card}>login</Link>
        <Link href="/register" className={styles.card}>register</Link>
      </main>

    </div>
  )
}
