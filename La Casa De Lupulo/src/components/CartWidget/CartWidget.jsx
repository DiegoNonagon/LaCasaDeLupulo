import "./css/styles.css"
import cart from "./assets/cart.ico"

const CartWidget = () => {
    return (
        <>
            <img className="cart" src={cart} alt="Cart Icon" />
            <p>
                0
            </p>
        </>
    )
}

export default CartWidget