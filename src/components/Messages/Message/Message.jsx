import React from 'react'
import m from './../Messages.module.css';
const Message = (props) => {
    return(<div className={m.message}>{props.message}</div>)
}
export default Message;