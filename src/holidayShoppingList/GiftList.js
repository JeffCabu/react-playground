import React from 'react'
import PropTypes from 'prop-types'

const GiftList = ({gifts}) => {
  return (
    <div>
      {
        gifts.map(gift => {
          return (
            <div>
              <p>{gift.name}</p>
              <p>{gift.price}</p>
            </div>
          )
        })
      }
    </div>
  )
}

GiftList.propTypes = {
  gifts: PropTypes.array.isRequired
}
export default GiftList
