
import './Item.css'
import  React from "react";
import { Link } from 'react-router-dom';



function Item ({producto}){
    

    return (
        
        <div className="tarjetaProducto col-3 align-items-center">
            <p className="producto">{producto.name}</p>
            <img className="imgProducto img-fluid col-12" src={producto.img} alt='' />
            <p>Categoria: {producto.category}</p>
            <p className="precio col-12 text-center mb-0">$ {producto.price}</p>
            <Link to={`/item/${producto.id}`}><button className='btn'>Ver detalle</button></Link> 
            
        </div>

    );
} 

export default Item;