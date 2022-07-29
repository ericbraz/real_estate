import React from 'react'
import styles from './ImageGalleryCard.module.scss'

interface Props {
   imgPath: string
   title: string
   desc?: string
   size?: number
   viz?: boolean
}

function ImageCard(props: Props) {
   const { imgPath, title, desc, size, viz } = props

   const realSize = size !== undefined && size < 200 ? 200 : size

   return (
      <div
         className={`${styles.outerCardDiv}`}
         style={
            viz
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
   )
}

export default ImageCard
