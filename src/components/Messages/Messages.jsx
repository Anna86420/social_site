import React from 'react'
import m from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
const Messages = (props) => {
  let dialogsElements = props.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>);
  
  let messagesElements = props.messagesData.map((message) => <Message message={message.message} />)
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
