import { Link,NavLink } from "react-router-dom"
import icon  from "../assets/images/icon.png"
const Header = ()=>{
return(
    <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
            <NavLink to="/host"
            className={({isActive})=> isActive ? 'nav-link':''}
            >Host
            </NavLink>
            <NavLink to="/about"
            className={({isActive})=> isActive ? 'nav-link':''}

            >About
            </NavLink>
            <NavLink to="/vans"
            className={({isActive})=> isActive ? 'nav-link':''}
            >Vans
            </NavLink>
            <Link to="/login" className="login-link"
            ><img src={icon} alt=" login icon" 
            className="login-icon"
            />
            </Link>
        </nav>
    </header>
)
}
export default Header
