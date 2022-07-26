import React from 'react'
import styles from './Layout.module.scss'
import Foot from './Foot'
import Header from './Header'
import Main from './Main'

function Layout({ children }: any) {
   return (
      <div className={styles.container}>
         <Header />
         <Main>{children}</Main>
         <Foot />
      </div>
   )
}

export default Layout
