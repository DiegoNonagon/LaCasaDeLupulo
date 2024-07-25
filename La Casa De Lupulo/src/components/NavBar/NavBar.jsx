import "./css/styles.css"
import logoUno from "./assets/logo1.jpg"
import logoDos from "./assets/logo2.jpg"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
const NavBar = () => {
    return (
        <nav className="navBar">
            <ul className="navBarItems">
                <li>
                    <img className="logoUno" src={logoUno} alt="Lúpulo" />
                </li>
                <li>
                    <Link to={"/"}>
                        <a><img className="logoDos" src={logoDos} alt="La Casa De Lúpulo" /></a>
                    </Link>
                </li>
                <li>
                    <Link to={"/"}>
                        <a className="navButton">HOME</a>
                    </Link>
                </li>
                <li>
                    <Link to={"/Catalogo"}>
                        <a className="navButton">CATÁLOGO</a>
                    </Link>
                </li>
                <li>
                    <Link>
                        <CartWidget/>
                    </Link>
                </li>
            </ul>  
        </nav>
    )
}

export default NavBar