import React, { useState } from 'react'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

interface Props {
   rating: number
   people: number
   color?: string
}

function RatingStar(props: Props) {
   const { rating, people, color = '#ffa500' } = props

   const [stars, setStars] = useState(loadingStars())

   function loadingStars(value = rating) {
      let tester = false
      const allStars: JSX.Element[] = []
      const repeater = [1, 2, 3, 4, 5]

      repeater.forEach((rate) => {
         if (rate <= value) {
            allStars.push(<BsStarFill />)
            rate === value ? (tester = true) : ''
         } else if (tester) {
            allStars.push(<BsStar />)
         } else if (rate > value) {
            tester = true
            allStars.push(<BsStarHalf />)
         }
      })

      return allStars
   }

   function mouseOnStars<
      T extends {
         id: string
      }
   >(event: React.MouseEvent<T, MouseEvent>) {
      const star = event.currentTarget
      setStars(loadingStars(parseInt(star.id.replace('star', ''))))
   }

   return (
      <span>
         <span>{rating}</span>
         &nbsp;&nbsp;&nbsp;
         <span id='teste' style={{ color: color }}>
            {stars.map((jsx, idx) => (
               <span
                  key={idx}
                  id={`star${idx + 1}`}
                  style={{ cursor: 'pointer' }}
                  onMouseOver={mouseOnStars}
                  onMouseOut={() => setStars(loadingStars())}
               >
                  {jsx}
               </span>
            ))}
         </span>
         &nbsp;&nbsp;&nbsp;
         <span>({people})</span>
      </span>
   )
}

export default RatingStar
