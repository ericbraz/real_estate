import React from 'react'
import styles from './Newsletter.module.scss'

interface Props {
   inputText: string
   newsStyle?: { readonly [key: string]: string }
}

function Newsletter(props: Props) {
   const { inputText, newsStyle } = props

   return (
      <div className={styles.newsletter}>
         <p>NEWSLETTER</p>
         <div>
            <form className={styles.newsForm} style={newsStyle}>
               <div>
                  <input id='email' type='email' name='email' placeholder={inputText} required />
               </div>
               <div>
                  <input id='submit' type='submit' value='Subscribe' />
               </div>
            </form>
         </div>
      </div>
   )
}

export default Newsletter
