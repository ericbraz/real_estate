import React from 'react'

const TagRenderer = ({
   children,
   className,
   tag,
}: {
   children: any
   className?: string
   tag: 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4'
}) => {
   switch (tag) {
      case 'div':
         return <div className={className}>{children}</div>
      case 'p':
         return <p className={className}>{children}</p>
      case 'h1':
         return <h1 className={className}>{children}</h1>
      case 'h2':
         return <h2 className={className}>{children}</h2>
      case 'h3':
         return <h3 className={className}>{children}</h3>
      case 'h4':
         return <h4 className={className}>{children}</h4>
   }
}

export default TagRenderer
