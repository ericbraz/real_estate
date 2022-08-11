import React, { useEffect, useState } from 'react'
import styles from './FirstFold.module.scss'
import { TbArrowNarrowDown } from 'react-icons/tb'

function FirstFold() {
   const [bouncer, setBouncer] = useState(styles.bouncer)

   const [clicked, setClicked] = useState(false)

   let tester = 0
   const changeBouncerClass = () => {
      tester += 1
      if (bouncer && tester % 2 === 0) setBouncer(styles.bouncer)
      else setBouncer('')
   }

   useEffect(() => {
      setInterval(() => !clicked && changeBouncerClass(), 5000)
   }, [])

   return (
      <>
         <div className={`${styles.outerTopDiv}`}>
            <div className={styles.innerTopDiv}>
               <div className={styles.leftDiv}></div>
               <div className={styles.rightDiv}>
                  <div className={styles.rightContent}>
                     <div className={styles.upperContent}>
                        <h1>A Casa dos seus Sonhos pode estar em Qualquer Lugar.</h1>
                     </div>
                     <div className={styles.bottomContent}>
                        <div>
                           <h3>600K</h3>
                           <span>Investidos</span>
                           <p>
                              E os planos são em aumentar esse investimento em 42% no próximo ano
                           </p>
                        </div>
                        <div>
                           <h3>50m²</h3>
                           <span>De área</span>
                           <p>Construída e mais 50m² serão construídos no próximo ano</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className={styles.arrowSection}>
            <div className={`${styles.arrow}`} onClick={() => setClicked(true)}>
               <span className={!clicked ? bouncer : ''}>
                  <TbArrowNarrowDown />
               </span>
            </div>
         </div>
      </>
   )
}

export default FirstFold
