import type { NextPage } from 'next'
// pemanggilan komponen
import Layout from '../components/Layout'
// pemanggilan css modular
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
      // penerapan componen layout
      <Layout pageTitle="Home Page">
          {/* implementasi css modular */}
          <h1 className={styles['title-homepage']}>Welcome Rayhan</h1>
      </Layout>
  )
}

export default Home
