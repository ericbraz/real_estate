import React, { Fragment } from 'react'
import { IMAGES_GALLERY, IMAGES_GALLERY_PATH } from '../../constants/imagesConstants'
import styles from './GallerySection.module.scss'
import ImageGalleryCard from './ImageGalleryCard'

function GallerySection() {
   const path = IMAGES_GALLERY_PATH
   const images = IMAGES_GALLERY
   const length = images.length
   if (!Array.isArray(images) || length < 3) {
      return null
   }

   return (
      <div className={styles.slider}>
         {images.map((image, idx) => (
            <Fragment key={`sliderSpan${idx + 1}`}>
               <span id={`sliderSpan${idx + 1}`}>
                  <ImageGalleryCard
                     imgPath={`${path}/${image.file}`}
                     title={image.title}
                     desc={image.description}
                     size={300}
                     viz={true}
                  />
               </span>
            </Fragment>
         ))}
      </div>
   )
}

export default GallerySection
