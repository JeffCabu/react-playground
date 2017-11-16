import React from 'react'

const style = {
  container: {
    border: '1px solid black',
    borderRadius: 5,
    background: 'grey',
    display: 'flex',
    justifyContent: 'center',
    color: 'darkred',
    width: '80vw',
    padding: 20
  }
}

const Header = () => {
  return (
    <div style={style.container}>
      <h1>Stuff to do</h1>
    </div>
  )
}

export default Header
