import './Item.css'
import { Link } from 'react-router-dom'

const Item =  ({id, nombre, marca, img, estilo, precio}) => {

    return (
        <div key={id} className='card-item'>
            <img className='img' src={img} alt="Cerveza Imagen" />
            <h3>{nombre}</h3>
            <h3>{marca}</h3>
            <h3>{estilo}</h3>
            <p>Precio: <b>${precio}</b></p>
            <button>Agregar al carrito</button>
            <Link to={`/detalle/${id}`}>
                <button>
                    Ver Detalle
                </button>
            </Link>
        </div>
    )
}

export default Item;