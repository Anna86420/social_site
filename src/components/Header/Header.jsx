import h from "./Header.module.css"
const Header = () => {
    return (
        <header className={h.header}>
            <img className={h.logo} src='https://th.bing.com/th/id/OIP.YLLJikmvVduZVlzMnsE-EwHaHa?w=203&h=203&c=7&r=0&o=7&pid=1.7&rm=3' />
        </header>
    )
}
export default Header;