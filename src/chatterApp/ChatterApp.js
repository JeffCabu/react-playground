import React, {Component} from 'react'
import Data from './Data'
import './styles.css'
import faker from 'faker'
import Chats from './Chats'

class ChatterApp extends Component {
  state = {
    chats: undefined
  }
  componentDidMount = () => {
    // alert('Component did mount')
    setTimeout(() => {
      this.setChatData()
    }, 1000)
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
  render () {
    return (
      <div>
        {
          this.state.chats ? <Chats chats={this.state.chats} /> : 'Loading...'
        }
      </div>
    )
  }
}

export default ChatterApp
