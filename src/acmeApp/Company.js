import React from 'react'
import PropTypes from 'prop-types'

const Company = ({title, street, city, state, zip, phoneNumber}) => {
  return (
    <div className='companyContainer'>
      <div className='addressFooter'>
        <h3 className='footerTitle'>{title}</h3>
        <p className='contactInfoFooter'><strong>Address:</strong> {street}, {city}, {state}  <strong>Zip code:</strong>  {zip} <strong>Contact Number:</strong>  {phoneNumber}</p>
      </div>
    </div>
  )
}

Company.propTypes = {
  title: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired
}

export default Company
