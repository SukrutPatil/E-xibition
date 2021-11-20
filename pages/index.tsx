import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Demo from '@template/Home/Hero/Hero'
import React from 'react'
import Nav from '@components/nav/Nav'
import Features from '@template/Home/Features/Features'
import Main from '@template/Home/Main/Main'
import Process from '@template/Home/Process/Process'
import Footer from '@components/footer/Footer'

const Home: NextPage = () => {
  return (
    <div>    
      <div className={styles.container}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Satisfy&display=swap" rel="stylesheet"/>
      </Head>
      <Nav/>
      <Demo/>
    </div>
    <Features/>
    <Main/>
    <Process/>

    </div>

  )
}

export default Home
