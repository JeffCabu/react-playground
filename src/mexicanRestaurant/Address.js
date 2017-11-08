import React from 'react'

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
export default Address
