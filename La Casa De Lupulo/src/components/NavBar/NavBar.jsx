import "./css/styles.css"
import logoUno from "./assets/logo1.jpg"
import logoDos from "./assets/logo2.jpg"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="navBar">
            <ul className="navBarItems">
                <img className="logoUno" src={logoUno} alt="Lúpilo" />
                <a><img className="logoDos" src={logoDos} alt="La Casa De Lúpulo" /></a>
                <button className="navButton">HOME</button>
                <button className="navButton">CATÁLOGO</button>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar