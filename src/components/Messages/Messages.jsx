import React from 'react'
import m from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
const Messages = (props) => {
  let dialogsData = [
    {id: 1, name: 'Anna'},
    {id: 2, name: 'Julia'},
    {id: 3, name: 'Fedor'},
    {id: 4, name: 'Sophiko'},
  ]
  let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How r u'},
    {id: 3, message: 'Hello'},
    {id: 4, message: 'Yo'},
  ]
  let dialogsElements = dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>);
  
  let messagesElements = messagesData.map((message) => <Message message={message.message} />)
  return (
    <div className={m.dialogs}>
      <div className={m.messages_items}>
        {dialogsElements}
      </div>
      <div className={m.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Messages
