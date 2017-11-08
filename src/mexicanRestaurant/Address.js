import React from 'react'
import PropTypes from 'prop-types'
const AddressStyle = {
  container: {
    border: '3px dashed red',
    display: 'flex',
    justifyContent: 'center'
  },
  test: {
    border: '2px solid blue',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '50%'
  }
}

const Address = ({street, suite, city, state, zip}) => {
  return (
    <div style={AddressStyle.container}>
      <div style={AddressStyle.test}>
        <p>{street}</p>
        <p>{suite}</p>
        <p>{city}</p>
        <p>{state}</p>
        <p>{zip}</p>
      </div>
    </div>
  )
}

Address.propTypes = {
  street: PropTypes.string.isRequired,
  suite: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired
}
export default Address
