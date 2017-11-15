import React from 'react'
import Nexus from './Nexus'

const styleApp = {
  background: {
    background: 'url(http://verdewall.com/wp-content/uploads/2016/08/Background-437.jpg)'
    // width: '1920px',
    // height: '1080px',

  },
  container: {
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center'
    // color: 'white',
    // width: '100%',
    // height: '100%'
    // position: 'fixed'
  }
}
const App = () => {
  return (
    <div style={styleApp.background}>
      <div style={styleApp.container}>
        <h1>Hello</h1>
        <Nexus />
      </div>
    </div>
  )
}

export default App
