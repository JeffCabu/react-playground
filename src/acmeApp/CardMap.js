import React from 'react'
import CustomerCard from './CustomerCard'

const CardMaps = ({arr}) => {
  return (
    <div>
      {
        arr.map((customer) => {
          return <CustomerCard customer={customer} />
        })
      }
    </div>
  )
}

export default CardMaps
