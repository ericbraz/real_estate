import React from 'react'

interface FooterContent {
   title: string
   list: string[]
}

interface Props {
   styles: string
}

export default function FooterContent(props: Props) {
   const { styles } = props

   const footerContent: FooterContent[] = [
      {
         title: 'Títutlo teste',
         list: ['Apenas um teste', 'Apenas um teste', 'Apenas um teste', 'Apenas um teste'],
      },
      {
         title: 'Títutlo teste muito maior',
         list: ['Apenas um teste', 'Apenas um teste', 'Apenas um teste', 'Apenas um teste'],
      },
   ]

   return (
      <>
         {footerContent.map((content) => (
            <div key={content.title} className={styles}>
               <h4>{content.title}</h4>
               <ul>
                  {content.list.map((item, idx) => (
                     <li key={content.title + idx.toString()}>{item}</li>
                  ))}
               </ul>
            </div>
         ))}
      </>
   )
}
