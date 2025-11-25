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
            <div className={s.item} onClick={handleClick}><a>Profile</a></div>
            <div className={s.item} onClick={handleClick}><a>Messages</a></div>
            <div className={s.item} onClick={handleClick}><a>Friends</a></div>
            <div className={s.item} onClick={handleClick}><a>Courses</a></div>
            <div className={s.item} onClick={handleClick}><a>Music</a></div>
            <div className={s.item} onClick={handleClick}><a>Videos</a></div>
        </nav>
    )
}
export default Navbar;