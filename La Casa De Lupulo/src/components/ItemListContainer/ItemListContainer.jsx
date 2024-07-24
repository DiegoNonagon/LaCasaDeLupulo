import React, { useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import Loader from '../Loader/Loader'
import { useAppContext } from '../Context'

const ItemListContainer = () => {

        const { cargarData, productos } = useAppContext();
    
        useEffect(() => {
            cargarData();
        });
    
    
        return (
            <>
                {
                    productos.length === 0 ?
                        <Loader />
                        :
                        <>
                            <h2>Bienvenidos</h2>
                            <ItemList productos={productos} />
                        </>
                }
            </>
        )
    }

export default ItemListContainer