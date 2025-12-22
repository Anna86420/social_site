import React from 'react'
import m from './Messages.module.css';
import { NavLink } from 'react-router-dom';
const DialogItem = (props) => {
  let path = "/messages/" + props.id;
  return (<div className={m.item + ' ' + m.active}>
          <NavLink to={path}>{props.name}</NavLink>
        </div>)
}
const Message = (props) => {
  return (
    <div className={m.message}>{props.message}</div>
  )
}
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
