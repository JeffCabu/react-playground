import React from 'react'
import PropTypes from 'prop-types'
import CustomerCard from './CustomerCard'

const CardMaps = ({arr}) => {
  return (
    <div>
      {
        arr.map((customer) => { // this doesnt work
          return <CustomerCard customer={customer} />
        })
      }
    </div>
  )
}

export default CardMaps
