import m from './../Messages.module.css';
import { NavLink } from 'react-router-dom';
const DialogItem = (props) => {
    let path = "/messages/" + props.id;
    return (<div className={m.item + ' ' + m.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>)
}
export default DialogItem;