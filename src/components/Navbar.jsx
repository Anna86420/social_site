import s from "./Navbar.module.css"
const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}><a>Profile</a></div>
            <div className={s.item}><a>Messages</a></div>
            <div className={s.item}><a>Friends</a></div>
            <div className={s.item}><a>Courses</a></div>
            <div className={s.item}><a>Music</a></div>
            <div className={s.item}><a>Videos</a></div>
        </nav>
    )
}
export default Navbar;