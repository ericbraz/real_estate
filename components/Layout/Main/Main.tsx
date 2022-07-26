import React from 'react'
import styles from './Main.module.scss'

function Main({ children }: any) {
   return (
      <main className={styles.main}>
         <h1>AEJ Incorporadora</h1>
         {children}
      </main>
   )
}

export default Main
