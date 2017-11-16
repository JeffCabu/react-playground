import React from 'react'
import ToDoContainer from './ToDoContainer'
import Header from './Header'

const style = {
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'url(https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjckav2kMLXAhVN_mMKHaKxAN0QjRwIBw&url=http%3A%2F%2Fhdw.eweb4.com%2Fout%2F242515.html&psig=AOvVaw3HbjmAgK7ZKbYyE0xhtAwG&ust=1510888599703275)'
  }
}
const App = () => {
  return (
    <div style={style.container}>
      <Header />
      <ToDoContainer />
    </div>
  )
}

export default App
