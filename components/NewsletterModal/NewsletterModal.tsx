import React, { useEffect, useState } from 'react'
import styles from './NewsletterModal.module.scss'
import Modal from '../Modal'

interface Props {
   modalState: boolean
}

function NewsletterModal(props: Props) {
   const { modalState } = props

   const [openNewsletter, setOpenNewsletter] = useState(modalState)

   const closeNewsletter = () => {
      setOpenNewsletter(false)
   }

   useEffect(() => {
      //setTimeout(() => setOpenNewsletter(true), 20000)
   }, [])
   const height = '500px'

   return (
      <Modal
         dimensions={{ width: '900px', height: height }}
         opened={openNewsletter}
         index={0}
         close={closeNewsletter}
      >
         <div className={styles.content}>
            <div className={styles.left} style={{ height: height }}></div>
            <div className={styles.right} style={{ height: height }}></div>
         </div>
      </Modal>
   )
}

export default NewsletterModal
