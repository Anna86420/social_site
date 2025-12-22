import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css"
const Navbar = () => {
    const handleClick = (event) => {
        const items = document.getElementsByClassName(s.item);
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove(s.active);
        }

        // Add the class to the clicked item
        event.currentTarget.classList.add(s.active);
    };
        
    return (
        <nav className={s.nav}>
            <div className={s.item} onClick={handleClick}><NavLink to="/profile">Profile</NavLink></div>
            <div className={s.item} onClick={handleClick}><NavLink to="/messages">Messages</NavLink></div>
            <div className={s.item} onClick={handleClick}><NavLink to="/friends">Friends</NavLink></div>
            <div className={s.item} onClick={handleClick}><NavLink to='/courses'>Courses</NavLink></div>
            <div className={s.item} onClick={handleClick}><NavLink to='/music'>Music</NavLink></div>
            <div className={s.item} onClick={handleClick}><NavLink to='/videos'>Videos</NavLink></div>
            <div className={s.item} onClick={handleClick}><NavLink to='/settings'>Settings</NavLink></div>
        </nav>
    )
}
export default Navbar; 