import React from 'react'

interface Props {
   children: any
   tag: 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'
   style?: React.CSSProperties
}

function Tag(props: Props) {
   const { children, tag, style } = props

   switch (tag) {
      case 'div':
         return <div style={style}>{children}</div>
      case 'p':
         return <p style={style}>{children}</p>
      case 'h1':
         return <h1 style={style}>{children}</h1>
      case 'h2':
         return <h2 style={style}>{children}</h2>
      case 'h3':
         return <h3 style={style}>{children}</h3>
      case 'h4':
         return <h4 style={style}>{children}</h4>
      case 'h5':
         return <h5 style={style}>{children}</h5>
      case 'h6':
         return <h6 style={style}>{children}</h6>
      case 'span':
         return <span style={style}>{children}</span>
   }
}

export default Tag
