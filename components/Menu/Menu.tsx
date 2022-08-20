import Link from 'next/link'
import React, { Fragment, useEffect, useState } from 'react'
import { MENU_ITEMS } from '../../constants/topMenu'
import LogoComponent from '../LogoComponent'
import styles from './Menu.module.scss'

interface Props {
   menuStyle: { readonly [key: string]: string }
}

const Menu = (props: Props) => {
   const { menuStyle } = props

   /* Navbar background color change */
   const [navbar, setNavbar] = useState(false)
   /* Logo navbar color change */
   const [logoColor, setLogoColor] = useState(false)
   const changeMenuBackground = () => {
      if (window.scrollY >= 100) {
         setNavbar(true)
         setLogoColor(true)
      } else {
         setNavbar(false)
         setLogoColor(false)
      }
   }

   useEffect(() => {
      window.addEventListener('scroll', changeMenuBackground)
   }, [])

   return (
      <nav className={menuStyle.header}>
         <div className={styles.logo} style={logoColor ? { color: 'white' } : { color: '#161e35' }}>
            <LogoComponent tag={'h3'} text={true} />
         </div>
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
