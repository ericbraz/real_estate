interface FooterContent {
   title: string
   list: JSX.Element[]
}

interface Props {
   styles: string
}

export default function FooterContent(props: Props) {
   const { styles } = props

   const footerContent: FooterContent[] = [
      {
         title: 'Títutlo teste',
         list: [
            <li>Apenas um teste</li>,
            <li>Apenas um teste</li>,
            <li>Apenas um teste</li>,
            <li>Apenas um teste</li>,
         ],
      },
      {
         title: 'Títutlo teste muito maior',
         list: [
            <li>Apenas um teste</li>,
            <li>Apenas um teste</li>,
            <li>Apenas um teste</li>,
            <li>Apenas um teste</li>,
         ],
      },
   ]

   return (
      <>
         {footerContent.map((content) => (
            <div className={styles}>
               <h4>{content.title}</h4>
               <ul>{content.list.map((item) => item)}</ul>
            </div>
         ))}
      </>
   )
}
