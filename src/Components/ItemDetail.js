import React from 'react'
import './ItemDetail.css'
import Counter from './Counter'


const ItemDetail = (producto) => {
    
    
    return (

        <div>
                        
            <div className="tarjetaProducto col-3 align-items-center">
                <p className="producto">{producto.names}</p>
                <img src={producto.img} alt={producto.names} className="imgProducto img-fluid col-12"/>
                <p className="precio col-5 text-center mb-0">$ {producto.price}</p>
                <p>{ producto.category }</p> 
                <Counter />
            </div>
            
        </div>
    )
}

export default ItemDetail