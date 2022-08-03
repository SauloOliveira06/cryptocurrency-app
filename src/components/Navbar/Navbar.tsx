import style from '../../styles/navbar.module.css';
import logo from '../../assets/logo.svg';

const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <img src={logo} alt="bit" className={style.logoLink} />
        </nav>
    )
}

export default Navbar;