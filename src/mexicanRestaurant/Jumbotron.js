import React from 'react'
import PropTypes from 'prop-types'

const titleStyle = {
  container: {
    background: 'brown',
    textAlign: 'center'
  }
}
const Jumbotron = ({title}) => {
  return (
    <div style={titleStyle.container}>
      <h1>{title}</h1>
    </div>
  )
}

Jumbotron.propTypes = {
  title: PropTypes.string.isRequired
}

export default Jumbotron
