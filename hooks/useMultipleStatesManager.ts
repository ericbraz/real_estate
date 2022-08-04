import { useState } from 'react'

interface MultipleStates<T> {
   element: T
   state: boolean
}

const useMultipleStatesManager = <T>(elementList: T[], bool = false) => {
   const [elementsState, setElementsState] = useState<MultipleStates<T>[]>()

   const setAllElementsState = () => {
      const settleElements: MultipleStates<T>[] = []
      elementList.forEach((element) => {
         settleElements.push({ element: element, state: bool })
      })
      setElementsState(settleElements)
   }

   const changeElementState = (index: number) => {
      const settleElement = { ...elementsState } as MultipleStates<T>[]
      const newState = !settleElement[index].state
      settleElement[index].state = newState
      setElementsState(settleElement)
   }

   return {
      elementsState,
      setAllElementsState,
      changeElementState,
   }
}

export default useMultipleStatesManager
