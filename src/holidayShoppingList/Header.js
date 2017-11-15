import React from 'react'

const headerStyle = {
  container: {
    border: '3px solid black',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'rgba(255,100,0,.5)'
  },
  iContainer: {
    border: '2px soild black'
  }
}
const Header = () => {
  return (
    <div style={headerStyle.container}>
      <div>
        <div className='test' style={headerStyle.iContainer}>
          <div>
            <p className='pacman' />
          </div>
        </div>
        <h1>Holiday Shopping List(Static)</h1>
      </div>
      <h2>Keep track of your gifts Header(Static)</h2>
      <div />
    </div>
  )
}

export default Header
