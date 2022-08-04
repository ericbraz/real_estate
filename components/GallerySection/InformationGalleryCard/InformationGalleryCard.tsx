import React from 'react'
import { IMAGES_GALLERY_PATH } from '../../../constants/imagesConstants'
import Modal from '../../Modal'
import Dimensions from '../../Modal/DimensionInterface'
import styles from './InformationGalleryCard.module.scss'

interface Props {
   children: any
   opened: boolean
   index: number
   close: (index: number) => void
   imgPath: string
   dimensions: Dimensions
}

function InformationGalleryCard(props: Props) {
   const { children, opened, index, close, imgPath, dimensions } = props

   const path = IMAGES_GALLERY_PATH

   const height = dimensions.height

   return (
      <Modal dimensions={dimensions} opened={opened} index={index} close={close}>
         <div className={styles.content}>
            <div
               className={styles.left}
               style={{ backgroundImage: `url(${path}/${imgPath})`, height: height }}
            ></div>
            <div className={styles.right} style={{ height: height }}>
               {children}
            </div>
         </div>
      </Modal>
   )
}

export default InformationGalleryCard
