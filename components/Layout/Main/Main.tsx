import React from 'react'
import styles from './Main.module.scss'

function Main({ children }: any) {
   return (
      <main className={styles.main}>
         {children}
      </main>
   )
}

export default Main
