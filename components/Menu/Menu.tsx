import Link from 'next/link'
import React from 'react'
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
               <Link href={`#${menu.id}`}>
                  <li key={menu.name}>{menu.name}</li>
               </Link>
            ))}
         </ul>
      </nav>
   )
}

export default Menu
