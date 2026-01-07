import React from 'react'
import m from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/messages-reducer';
const Messages = (props) => {
  let state = props.store.getState().messagesPage;
  let dialogsElements = state.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>); 
  let messagesElements = state.messages.map((message) => <Message message={message.message} />)
  let newMessageBody = state.newMessageBody;
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  }
  return (
    <div className={m.dialogs}>
      <div className={m.messages_items}>
        {dialogsElements}
      </div>
      <div className={m.messages}>
        <div>{messagesElements}</div>
        <div>
          <div><textarea value={newMessageBody} 
          onChange = {onNewMessageChange}
          placeholder='Enter your message'></textarea></div>
          <div><button onClick={onSendMessageClick}>Send</button></div>
        </div>
      </div>
    </div>
  )
}

export default Messages
