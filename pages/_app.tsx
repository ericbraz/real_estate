import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { NewsletterContext } from '../components/contexts/NewsletterContext'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
   const [newsletter, setNewsletter] = useState(false)

   const [actionable, setActionable] = useState(false)

   useEffect(() => {
      setTimeout(() => setActionable(true), 20000)
   }, [])

   return (
      <NewsletterContext.Provider value={{ newsletter }}>
         <div onMouseLeave={() => actionable && setNewsletter(true)}>
            <Layout>
               <Component {...pageProps} />
            </Layout>
         </div>
      </NewsletterContext.Provider>
   )
}

export default MyApp
