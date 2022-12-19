import React from 'react'
import './ItemDetail.css'
import Counter from './Counter'


const ItemDetail = (productos) => {
    
    
    return (

        <div>
                        
            <div className="tarjetaProducto col-3 align-items-center">
                <p className="producto">{productos.names}</p>
                <img src={productos.img} alt={productos.names} className="imgProducto img-fluid col-12"/>
                <p className="precio col-5 text-center mb-0">$ {productos.price}</p>
                <p>{ productos.category }</p> 
                <Counter />
            </div>
            
        </div>
    )
}

export default ItemDetail