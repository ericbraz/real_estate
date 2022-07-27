import Link from 'next/link'
import React, { Fragment } from 'react'
import { MENU_ITEMS } from '../../constants/topMenu'
import styles from './Menu.module.scss'

interface Props {
   menuStyle: { readonly [key: string]: string }
}

const Menu = (props: Props) => {
   const { menuStyle } = props

   return (
      <nav className={menuStyle.header}>
         <ul className={styles.menu}>
            {MENU_ITEMS.map((menu) => (
               <Fragment key={menu.name}>
                  <Link href={`#${menu.id}`}>
                     <li>{menu.name}</li>
                  </Link>
               </Fragment>
            ))}
         </ul>
      </nav>
   )
}

export default Menu
