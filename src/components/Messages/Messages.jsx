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
  return (
    <div className={m.dialogs}>
      <div className={m.messages_items}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
        <DialogItem name="Fedor" id="3"/>
        <DialogItem name="Sophiko" id="4"/>
      </div>
      <div className={m.messages}>
        <Message message={messagesData[0].message} />
        <Message message="How r u" />
        <Message message="Yo" />
      </div>
    </div>
  )
}

export default Messages
