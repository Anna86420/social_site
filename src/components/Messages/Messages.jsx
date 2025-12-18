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
  return (
    <div className={m.dialogs}>
      <div className={m.messages_items}>
        <DialogItem name="Anna" id="1"/>
        <DialogItem name="Julia" id="2"/>
        <DialogItem name="Fedor" id="3"/>
        <DialogItem name="Sophiko" id="4"/>
      </div>
      <div className={m.messages}>
        <Message message="Hi" />
        <Message message="How r u" />
        <Message message="Yo" />
      </div>
    </div>
  )
}

export default Messages
