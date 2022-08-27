import React, { useContext, useEffect, useState } from 'react'
import styles from './NewsletterModal.module.scss'
import Modal from '../Modal'
import { NewsletterContext } from '../contexts/NewsletterContext'
import Newsletter from '../Newsletter/Newsletter'

function NewsletterModal() {
   const height = '500px'

   const { newsletter } = useContext(NewsletterContext)

   const [localNewsletter, setLocalNewsletter] = useState(newsletter)

   useEffect(() => {
      setLocalNewsletter(newsletter)
   }, [newsletter])

   const formStyle = {
      display: 'flex',
      flexDirection: 'column',
      margin: '0',
      padding: '0',
      textIndent: '0',
   } as React.CSSProperties

   const inputs = {
      padding: '10px 0',
      width: '100%',
      transform: 'translateX(-35px)'
   }

   const emailStyle = {
      ...inputs,
   } as React.CSSProperties

   const submitStyle = {
      ...inputs,
   } as React.CSSProperties

   return (
      <Modal
         dimensions={{ width: '900px', height: height }}
         opened={localNewsletter}
         index={0}
         close={() => setLocalNewsletter(false)}
      >
         <div className={styles.content}>
            <div className={styles.left} style={{ height: height }}>
               <Newsletter
                  inputText='Deixe seu melhor e-mail'
                  callToAction='Espera! Não vá embora antes de me dar um chá de cadeira hehe'
                  formStyle={formStyle}
                  emailStyle={emailStyle}
                  submitStyle={submitStyle}
               />
            </div>
            <div className={styles.right} style={{ height: height }}></div>
         </div>
      </Modal>
   )
}

export default NewsletterModal
