import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Portfolio | Home</title>
      <meta name="keywords" content="portfolio" />
    </Head>

    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea molestias voluptatem repellat harum dicta, veniam officia consequuntur animi sed, maiores deleniti! Iusto quia consectetur reprehenderit quas magnam natus fugiat consequuntur!</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat eum voluptas debitis at explicabo cupiditate? Corporis modi deleniti aut tenetur repudiandae, saepe autem veniam reiciendis eum temporibus eveniet aperiam minus?</p>
      <Link href="/blog">
        <a className={styles.btn}> See blog posts</a>
      </Link>
    </div>
    </>
  )
}
