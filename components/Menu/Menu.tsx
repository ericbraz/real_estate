import Link from 'next/link'
import React, { Fragment, useEffect, useState } from 'react'
import { MENU_ITEMS } from '../../constants/topMenu'
import styles from './Menu.module.scss'

interface Props {
   menuStyle: { readonly [key: string]: string }
}

const Menu = (props: Props) => {
   const { menuStyle } = props

   const [navbar, setNavbar] = useState(false)
   const changeMenuBackground = () => {
      if (window.scrollY >= 100) setNavbar(true)
      else setNavbar(false)
   }

   useEffect(() => {
      window.addEventListener('scroll', changeMenuBackground)
   }, [])

   return (
      <nav className={menuStyle.header}>
         <ul className={`${styles.menu} ${navbar ? styles.active : ''}`}>
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
