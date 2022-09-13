import type { NextPage } from 'next'
import Head from 'next/head'
import { useUnit } from 'effector-react'
import {
  Navbar,
  Content
} from '../components'
import styles from '../styles/home.module.scss'
import { NavigationContainer } from '../widgets/navigation/navigation.container'
import { navigationService } from '../services/navigation'

const Home: NextPage = () => {

  const navigationItems = useUnit(navigationService.outputs.$navigationItems);

  return (
    <div className={styles.root}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <NavigationContainer items={navigationItems} />
      </div>
    </div>
  )
}

export default Home
