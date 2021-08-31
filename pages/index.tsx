import type { NextPage } from 'next'
// pemanggilan komponen
import Footer from '../components/Footer'
import Header from '../components/Header'
// pemanggilan css modular
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    // ini dibungkus oleh fragment, karena component reactJS harus di return dalam satu parent
    <>
      {/* penerapan komponen */}
      <Header/>
      {/* implementasi css modular */}
      <h1 className={styles['title-homepage']}>Welcome Rayhan</h1>
      <Footer/>
    </>
  )
}

export default Home
