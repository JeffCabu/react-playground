import React, {Component} from 'react'
// import Data from './Data'
import './styles.css'
import faker from 'faker'
import Chats from './Chats'

class ChatterApp extends Component {
  state = {
    chats: undefined,
    message: undefined,
    username: undefined,
    avatar: undefined
  }
  componentDidMount () {
    // alert('Component did mount')
    setTimeout(() => {
      this.setChatData()
    }, 3000)
  }

  setMessage = (e) => {
    let message = e.target.value
    this.setState({ message: message })
    console.log(this.state.messgae)
  }
  setUsername = (e) => {
    let username = e.target.value
    this.setState({ username: username })
    console.log(this.state.username)
  }
  setAvatar = (e) => {
    let avatar = e.target.value
    this.setState({ avatar: avatar })
    console.log(this.state.avatar)
  }
  
  setChatData = () => {
    // alert('About to set chat data')
    let chatsArr = []
    for (let i = 0; i < 11; i += 1) {
      let chat = {
        avatar: faker.image.avatar(),
        username: faker.internet.userName(),
        message: faker.random.word()
      }
      chatsArr.push(chat)
    }
    this.setState({ chats: chatsArr })
  }
  submitInfo = (e) => {
    e.preventDefault()
    let newChat = {
      avatar: this.state.avatar,
      username: this.state.username,
      message: this.state.message
    }
    let allChats = this.state.chats
    allChats.unshift(newChat)
    this.setState({ chats: allChats })
  }

  render () {
    return (
      <div>
        {
          this.state.chats ? <Chats chats={this.state.chats} /> : 'Loading...'
        }
        <form>
          <input placeholder='Avatar' onChange={this.setAvatar} />
          <input placeholder='Username' onChange={this.setUsername} />
          <input placeholder='Message'onChange={this.setMessage} />
          <button type='button' onClick={this.submitInfo}>Submit</button>
        </form>
      </div>
    )
  }
}
export default ChatterApp
