import React from 'react'
import Foot from './Foot'
import Header from './Header'
import Main from './Main'

function Layout({ children }: any) {
   return (
      <>
         <Header />
         <Main>{children}</Main>
         <Foot />
      </>
   )
}

export default Layout
