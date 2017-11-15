import React from 'react'
import PropTypes from 'prop-types'

const giftStyle = {
  container: {
    border: '2px solid red',
    display: 'flex',
    justifyContent: 'space-around',
    flexFlow: 'row wrap'
    // alignContent: 'center'
    // alignItems: 'center'
  }
}
const GiftForm = ({ handleGiftNameChange, handleGiftPriceChange, addNewGift }) => {
  return (
    <div style={giftStyle.container}>
      <div>
        <label> Gift Name: </label>
        <input placeholder='Enter Gift Name' onChange={handleGiftNameChange} />
      </div>
      <div>
        <label> Gift Price: </label>
        <input placeholder='Enter Price' onChange={handleGiftPriceChange} />
      </div>
      <button type='button' onClick={addNewGift}>button</button>
    </div>
  )
}
GiftForm.propTypes = {
  handleGiftNameChange: PropTypes.func.isRequired,
  handleGiftPriceChange: PropTypes.func.isRequired,
  addNewGift: PropTypes.func.isRequired
}
export default GiftForm
