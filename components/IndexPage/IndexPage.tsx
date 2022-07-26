import React from 'react'
import { MENU_ITEMS } from '../../constants/topMenu'
import styles from './IndexPage.module.scss'

function IndexPage() {
   const [t1, t2, t3, t4] = MENU_ITEMS

   return (
      <div id={t1.id} className={`${styles.mainDiv} ${styles.allDivs}`}>
         <div className={styles.topDiv}>
            <div className={styles.leftDiv}>
               <h1>Conheça a Casa dos Sonhos</h1>
               <h3>AEJ Incorporadora</h3>
            </div>
            <div className={styles.rightDiv}></div>
         </div>
         <div id={t2.id} className={`${styles.allDivs}`}></div>
         <div id={t3.id} className={`${styles.allDivs}`}></div>
         <div id={t4.id} className={`${styles.allDivs}`}></div>
      </div>
   )
}

export default IndexPage