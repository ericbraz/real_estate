import Head from 'next/head'
import React from 'react'
import styles from './Header.module.scss'
import Menu from '../../Menu'

function LayoutHead() {
   return (
      <>
         <Head>
            <title>AEJ Incorporadora</title>
            <meta name='description' content='Venda de casas' />
            <meta name='keywords' content='imóveis, casa no parkway, compra de casas, casas df' />
            <link rel='icon' href='/favicon.ico' />
         </Head>
         <Menu menuStyle={styles} />
      </>
   )
}

export default LayoutHead
