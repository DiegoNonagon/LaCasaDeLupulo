import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({ productos }) => {
    return (
        <div className="item-list">
            {
                productos.map((el) => {
                    return (
                        <Item key={el.id} id={el.id} nombre={el.nombre} precio={el.precio} marca={el.marca} estilo={el.estilo} img={el.img} />
                    )
                })
            }
        </div>
    );
};

export default ItemList