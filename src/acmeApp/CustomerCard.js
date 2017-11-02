import React from 'react'
import PropTypes from 'prop-types'

const CustomerCard = ({customer}) => {
  return (
    <div className='customerDeck'>
      <img src={customer.img} />
      <div className='pContainer'>
        <p className='p'>{customer.name}</p>
        <p className='pOne'> {customer.email} </p>
      </div>
    </div>
  )
}

CustomerCard.propTypes = {
  customer: PropTypes.object.isRequired
}

export default CustomerCard
