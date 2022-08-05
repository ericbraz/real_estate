import React from 'react'
import styles from './SmallAdvantageCards.module.scss'
import { AiOutlineSafety, AiOutlineHome, AiOutlineLineChart } from 'react-icons/ai'

interface Advantages {
   title: string
   description: string
   icon?: JSX.Element
}

function SmallAdvantageCards() {
   const advantages: Advantages[] = [
      {
         title: 'Solidez',
         description: 'Investimento em um ativo considerado a garantia por si mesmo.',
         icon: <AiOutlineHome />,
      },
      {
         title: 'Alto retorno',
         description: 'Investimento no setor imobiliário é um dos que oferecem mais retorno.',
         icon: <AiOutlineLineChart />,
      },
      {
         title: 'Segurança',
         description: 'A posse do ativo imobiliário é um seguro contra tempos ruins.',
         icon: <AiOutlineSafety />,
      },
   ]

   return (
      <>
         {advantages.map((advantage) => (
            <div className={`${styles.card} ${styles.darkBackground}`}>
               <div className={styles.content}>
                  <div className={styles.icon}>{advantage.icon}</div>
                  <p className={styles.text}>{advantage.description}</p>
               </div>
               <div className={styles.titleDiv}>
                  <h3 className={styles.title}>{advantage.title}</h3>
               </div>
            </div>
         ))}
      </>
   )
}

export default SmallAdvantageCards
