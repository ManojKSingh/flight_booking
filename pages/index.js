import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SearchFlight from '../src/components/SearchFlight'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <SearchFlight />
      </main>

      <footer className={styles.footer}>
        Powered by {'ManojKSingh'}
      </footer>
    </div>
  )
}
