import React from 'react'
import styles from './Newsletter.module.scss'

interface Props {
   inputText: string
   callToAction?: string
   formStyle?: React.CSSProperties
   emailStyle?: React.CSSProperties
   submitStyle?: React.CSSProperties
}

function Newsletter(props: Props) {
   const { inputText, callToAction, formStyle, emailStyle, submitStyle } = props

   const realCall = callToAction === undefined ? 'NEWSLETTER' : callToAction
   const styleCall =
      callToAction === undefined
         ? ({ textTransform: 'none', fontStyle: 'italic' } as React.CSSProperties)
         : ({ textTransform: 'none', fontStyle: 'normal' } as React.CSSProperties)

   return (
      <div className={styles.newsletter}>
         <p style={styleCall}>{realCall}</p>
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
