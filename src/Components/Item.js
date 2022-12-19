
import './Item.css'
import  React from "react";
import { Link } from 'react-router-dom';


function Item ({producto}){

    return (
        
        <div className="tarjetaProducto col-3 align-items-center">
            <p className="producto">{producto.names}</p>
            <img src={producto.img} alt={producto.names} className="imgProducto img-fluid col-12"/>
            <p className="precio col-5 text-center mb-0">$ {producto.price}</p>
            <Link to={`/detail/${producto.id}`}><button className='btn'>Ver detalle</button></Link> 
            
        </div>

    );
} 

export default Item;