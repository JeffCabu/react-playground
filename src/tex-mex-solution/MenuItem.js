import React from 'react'
import PropTypes from 'prop-types'
const MenuItemstyle = {
  container: {
    border: '3px solid black',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    minWidth: '23%'
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
  }
}
const MenuItem = ({name, price, category, spiceLevel, img}) => {
  return (
    <div style={MenuItemstyle.container}>
      <div style={MenuItemstyle.card}>
        <h4>{name}</h4>
        <h4>{price}</h4>
        <h4>{category}</h4>
        <h4>Spice level: {spiceLevel}</h4>
        <img src={img} style={MenuItemstyle.img} />
      </div>
    </div>
  )
}

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  spiceLevel: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired
}

export default MenuItem
