import React from 'react'
import styles from './LogoComponent.module.scss'
import { SiDatabricks } from 'react-icons/si'
import TagRenderer from './TagRenderer'
import { COMPANY_NAME } from '../../constants/company'

interface Props {
   tag: 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4'
   text?: boolean
   logoSize?: number
   color?: string
}

function LogoComponent(props: Props) {
   const { tag, text, logoSize, color } = props

   return (
      <TagRenderer className={styles.logo} tag={tag}>
         <div>
            <SiDatabricks size={logoSize} color={color} />
         </div>
         {text !== undefined && text === true && <div>{COMPANY_NAME}</div>}
      </TagRenderer>
   )
}

export default LogoComponent
