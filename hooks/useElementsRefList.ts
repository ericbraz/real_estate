import { useRef } from 'react'

export default function useElementsRefList<T>() {
   const elementsReffed = useRef<T[]>([])

   const elementsReffer = (el: T | null, ElementReffed: React.MutableRefObject<T[]>) => {
      if (el && !ElementReffed.current.includes(el)) ElementReffed.current.push(el)
   }

   return { elementsReffed, elementsReffer }
}
