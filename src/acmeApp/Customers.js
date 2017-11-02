import React from 'react'
import PropTypes from 'prop-types'

const Customers = ({name, list, children}) => {
  return (
    <div>
      <h3>{list}</h3>
      <h4>{name}</h4>
      {children}
    </div>
  )
}

Customers.propTypes = {
  name: PropTypes.string.isRequired,
  list: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

export default Customers
