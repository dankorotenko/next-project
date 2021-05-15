import Head from 'next/head'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>People List | Home</title>
      <meta name="keywords" content="people" />
    </Head>
    <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maiores nostrum recusandae sit? Ea nesciunt, tempora accusamus, corporis laudantium atque obcaecati accusantium excepturi tenetur delectus, fuga dicta quo sed officiis voluptatibus iure. Cum quas doloremque aliquam nam molestiae, fuga explicabo dignissimos quos, magnam iste quaerat voluptatem vel quo, eius eos.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maiores nostrum recusandae sit? Ea nesciunt, tempora accusamus, corporis laudantium atque obcaecati accusantium excepturi tenetur delectus, fuga dicta quo sed officiis voluptatibus iure. Cum quas doloremque aliquam nam molestiae, fuga explicabo dignissimos quos, magnam iste quaerat voluptatem vel quo, eius eos.</p>
        <Link href="/people">
          <a className={styles.btn}>See People Listing</a>
        </Link>
    </div>
   </>
  )
}
