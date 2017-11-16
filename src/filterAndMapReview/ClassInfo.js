import React from 'react'
import PropTypes from 'prop-types'

const style = {
  container: {
    border: '2px solid red',
    display: 'flex',
    flexDirection: 'column',
    padding: '3%',
    width: 250
  }
}
const ClassInfo = ({item}) => {
  return (
    <div style={style.container}>
      <h3>{item.name}</h3>
      <h3>Cost:${item.cost}</h3>
      <h3>{item.instructor}</h3>
      <h3>{item.location}</h3>
    </div>
  )
}

ClassInfo.propTypes = {
  item: PropTypes.object.isRequired
}
export default ClassInfo
