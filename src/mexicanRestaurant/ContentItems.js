import React from 'react'
import PropTypes from 'prop-types'

const itemStyle = {
  containerLable: {
    borderBottom: '2px solid gray',
    display: 'flex',
    justifyContent: 'space-around'
  },
  img: {
    width: '100%',
    height: '72%',
    maxHeight: '230px'
  },
  card: {
    border: '1px solid black',
    boxShadow: '10px 10px 5px #888888',
    display: 'flex',
    flexDirection: 'column',
    width: '250px'
  },
  flexRow: {
    border: '3px solid purple',
    display: 'flex',
    justifyContent: 'center',
    minWidth: '23%'

  }
}
const ContentItems = ({items}) => {
  return (
    <div style={itemStyle.flexRow}>
      <div style={itemStyle.card}>
        <div style={itemStyle.containerLable}>
          <p className='fa fa-free-code-camp lableRed'>{items.spiceLevel}</p>
          <p className='lableWhite'><strong>{items.name}</strong></p>
          <p className='lableGreen'>${items.price}</p>
        </div>
        <img src={items.img} style={itemStyle.img} />
      </div>
    </div>
  )
}

ContentItems.propTypes = {
  items: PropTypes.object.isRequired
}

export default ContentItems
