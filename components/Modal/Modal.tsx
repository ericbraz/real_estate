import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import Dimensions from './DimensionInterface'
import styles from './Modal.module.scss'

interface Props {
   children: any
   dimensions: Dimensions
   style?: React.CSSProperties | undefined
   opened: boolean
   index: number
   close: (index: number) => void
}

function Modal(props: Props) {
   const { children, dimensions, style, opened, index, close } = props

   const buttonSize = 50
   const marginTop = { marginTop: `-${buttonSize / 2}px` } as React.CSSProperties

   const tempStyle = { ...Object.assign(dimensions, marginTop) } as React.CSSProperties
   const newStyle = { ...Object.assign(tempStyle, style) } as React.CSSProperties

   return (
      <>
         <div
            className={styles.outerModal}
            style={opened ? { display: 'flex' } : { display: 'none' }}
         >
            <div>
               <div
                  className={styles.close}
                  style={{ marginLeft: `${buttonSize / 2.2}px`, zIndex: 1000 }}
               >
                  <AiFillCloseCircle
                     color='#3071e7'
                     size={50}
                     title='Close | Fechar'
                     style={{ cursor: 'pointer' }}
                     onClick={() => close(index)}
                  />
               </div>
               <div className={styles.innerModal} style={newStyle}>
                  <div className={styles.content}>{children}</div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Modal
