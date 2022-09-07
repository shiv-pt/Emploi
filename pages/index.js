import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Ninja List | Home 
        </title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem sapiente minima possimus, iste quidem quasi saepe temporibus eaque, velit aspernatur inventore magni, ratione aut odio molestiae facere error consectetur ducimus?</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem sapiente minima possimus, iste quidem quasi saepe temporibus eaque, velit aspernatur inventore magni, ratione aut odio molestiae facere error consectetur ducimus?</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See ninjas listings</a>
        </Link>
      </div>
    </>
  )
}
