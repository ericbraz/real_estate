import React, { Fragment, useEffect, useState } from 'react'
import { IMAGES_GALLERY, IMAGES_GALLERY_PATH } from '../../constants/imagesConstants'
import useElementsRefList from '../../hooks/useElementsRefList'
import useMultipleStatesManager from '../../hooks/useMultipleStatesManager'
import { randomText } from '../../utils/dataHelper'
import styles from './GallerySection.module.scss'
import ImageGalleryCard from './ImageGalleryCard'
import InformationGalleryCard from './InformationGalleryCard'
import RatingStar from '../RatingStar'
import TagsComponent from '../TagsComponent'

function GallerySection() {
   const path = IMAGES_GALLERY_PATH
   const images = IMAGES_GALLERY
   const length = images.length

   /* removable */
   const [myText, setMyText] = useState('')

   const { elementsReffed, elementsReffer } = useElementsRefList<HTMLDivElement>()

   const { elementsState, setAllElementsState, changeElementState } = useMultipleStatesManager(
      elementsReffed.current,
      false
   )
   useEffect(() => {
      setAllElementsState()

      /* removable */
      setMyText(randomText())
   })

   /* removable */
   function changeElementStateAndText(index: number) {
      changeElementState(index)
      setMyText(randomText())
   }

   if (!Array.isArray(images) || length < 3) {
      return null
   }

   return (
      <div className={styles.slider}>
         {images.map((image, idx) => (
            <Fragment key={image.id}>
               <div id={`sliderSpan${image.id}`} onClick={() => changeElementState(idx)}>
                  <ImageGalleryCard
                     imgPath={`${path}/${image.file}`}
                     title={image.title}
                     desc={image.description}
                     size={300}
                     viz={true}
                  />
               </div>
               <div
                  id={image.id}
                  className={styles.modal}
                  ref={(el) => elementsReffer(el, elementsReffed)}
               >
                  <InformationGalleryCard
                     opened={elementsState === undefined ? false : elementsState[idx].state}
                     index={idx}
                     close={changeElementStateAndText}
                     imgPath={image.file}
                     dimensions={{ width: '70vw', height: '90vh' }}
                  >
                     <div className={styles.modalContent}>
                        <TagsComponent tags={image.tags} />
                        <h2 className={styles.title}>{image.title}</h2>
                        <p className={styles.textContent}>{myText}</p>
                        <span className={styles.starPrice}>
                           <RatingStar rating={image.ratings[0]} people={image.ratings[1]} />
                        </span>
                        <div className={styles.bottomContent}>
                           <div className={styles.bottomCard}>
                              <h3>{image.sum_title}</h3>
                              <ul>
                                 {image.summary.map((sum) => (
                                    <li key={sum}>{sum}</li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     </div>
                  </InformationGalleryCard>
               </div>
            </Fragment>
         ))}
      </div>
   )
}

export default GallerySection
