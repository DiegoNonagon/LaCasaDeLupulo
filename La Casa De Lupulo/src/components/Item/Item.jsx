import './Item.css'
import { useAppContext } from '../Context';

const Item =  ({nombre, marca, estilo, img, precio, id}) => {

    return (
        <div key={id} className='card-item'>
            <img className='img' src={img} alt="Cerveza Imagen" />
            <h3>{nombre}</h3>
            <h3>{marca}</h3>
            <h3>{estilo}</h3>
            <p>Precio: <b>${precio}</b></p>
            <button>Agregar al carrito</button>
        </div>
    )
}

export default Item;