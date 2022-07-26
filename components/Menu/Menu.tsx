import React from 'react'

interface Props {
   menuStyle: {
      readonly [key: string]: string
   }
}

const Menu = (props: Props) => {
   const { menuStyle } = props

   const menuItems = [
      { name: 'Home', link: '/' },
      { name: 'Galeria', link: '/' },
      { name: 'Tour Virtual', link: '/' },
      { name: 'Contato', link: '/' },
   ]

   return (
      <nav className={menuStyle.header}>
         <ul>
            {menuItems.map((menu) => (
               <li key={menu.name}>{menu.name}</li>
            ))}
         </ul>
      </nav>
   )
}

export default Menu
