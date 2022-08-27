import React from 'react'
import Tag from '../verse/Tag'
import styles from './Newsletter.module.scss'

interface Props {
   tag: 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'
   inputText: string
   callToAction?: string
   formStyle?: React.CSSProperties
   emailStyle?: React.CSSProperties
   submitStyle?: React.CSSProperties
}

function Newsletter(props: Props) {
   const { tag, inputText, callToAction, formStyle, emailStyle, submitStyle } = props

   const realCall = callToAction === undefined ? 'NEWSLETTER' : callToAction
   const styleCall: React.CSSProperties =
      callToAction === undefined
         ? { textTransform: 'none', fontStyle: 'italic' }
         : { textTransform: 'none', fontStyle: 'normal' }

   return (
      <div className={styles.newsletter} style={{ padding: 0 }}>
         <Tag tag={tag} style={styleCall}>
            {realCall}
         </Tag>
         <div style={{ height: 'max-content' }}>
            <form className={styles.newsForm} style={formStyle}>
               <div style={emailStyle}>
                  <input id='email' type='email' name='email' placeholder={inputText} required />
               </div>
               <div style={submitStyle}>
                  <input id='submit' type='submit' value='Subscribe' />
               </div>
            </form>
         </div>
      </div>
   )
}

export default Newsletter
