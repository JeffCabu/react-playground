import React from 'react'
import ChatBox from './ChatBox'

const Chats = ({chats}) => {
  return (
    <div className='chatSection'>
      {
        chats.map(chat =>
          <ChatBox
            username={chat.username}
            message={chat.message}
            avatar={chat.avatar}
          />
        )
      }
    </div>
  )
}

export default Chats
