import React from 'react'
import { MENU_ITEMS } from '../../constants/topMenu'
import FirstFold from '../FirstFold'
import GallerySection from '../GallerySection'
import SmallAdvantageCards from '../SmallAdvantageCards'
import styles from './IndexPage.module.scss'

function IndexPage() {
   const [t1, t2, t3, t4] = MENU_ITEMS

   return (
      <>
         <div id={t1.id} className={styles.background} style={{ position: 'absolute', top: 0 }}>
            <div className={styles.left}></div>
            <div className={styles.right}></div>
         </div>
         <div className={`${styles.mainDiv} ${styles.allDivs}`}>
            <FirstFold />
            <div id={t2.id} className={`${styles.allDivs} ${styles.advantageCards}`}>
               <SmallAdvantageCards />
            </div>
            <div id={t3.id} className={`${styles.allDivs}`}>
               <GallerySection />
            </div>
            <div id={t4.id} className={`${styles.allDivs}`}></div>
         </div>
      </>
   )
}

export default IndexPage
