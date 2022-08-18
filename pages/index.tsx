import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Navbar,
  Content,
  Footer,
  Support,
  About,
  WhatsOn,
  VisitUs,
  Classes
} from '../components'
import styles from '../styles/home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.root}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Navbar className={styles.navbar} />
        <Content className={styles.content}>
          <WhatsOn className={styles.whatsOn} />
          <VisitUs className={styles.visitUs} />
          <Classes className={styles.classes} />
          <Support className={styles.support} />
          <About className={styles.about} />
        </Content>
        <Footer className={styles.footer} />
      </div>
    </div>
  )
}

export default Home
