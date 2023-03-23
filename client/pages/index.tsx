import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="utf-8" />
        <title>portfolio</title>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff"></meta>
        <meta name="theme-color" content="#ffffff"></meta>
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
