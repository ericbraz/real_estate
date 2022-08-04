import React from 'react'
import styles from './ImageGalleryCard.module.scss'

interface Props {
   imgPath: string
   id: string
   title: string
   desc?: string
   size?: number
   viz?: boolean
   modal?: boolean
   setModal?: React.Dispatch<React.SetStateAction<boolean>>
}

function ImageCard(props: Props) {
   const { imgPath, id, title, desc, size, viz, modal, setModal } = props

   const realSize = size !== undefined && size < 200 ? 200 : size

   const visible = viz === undefined ? true : viz

   //const expansion = modal === undefined ? false : modal
   //const setExpansion = setModal === undefined ? () => {} : setModal

   return (
      <div className={styles.outerCardDiv}>
         <div
            className={`${styles.innerCardDiv}`}
            style={
               visible
                  ? realSize !== undefined
                     ? {
                          backgroundImage: `url(${imgPath})`,
                          width: realSize,
                          height: (realSize * 4) / 3,
                       }
                     : { backgroundImage: `url(${imgPath})` }
                  : { display: 'none' }
            }
         >
            <div className={styles.content} style={realSize ? { width: realSize } : {}}>
               <div>
                  {desc !== undefined && <p className={`${styles.desc}`}> {desc} </p>}
                  <h3 className={`${styles.title}`}> {title} </h3>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ImageCard
