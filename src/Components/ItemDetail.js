import React from 'react'
import './ItemDetail.css'
import Counter from './Counter'
import { BsArrow90DegLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const ItemDetail = ({producto}) => {
    
    return (
       
     <div className='row justify-content-center'>            
        <Link to='/'><div className='arrow'><BsArrow90DegLeft /></div></Link>
        <div className="tarjetaProducto col-3 align-items-center">
            <p className="producto">{producto.name}</p>
            <img src={producto.img} alt='' className="imgProducto img-fluid col-12"/>
            <p className="precio col-12 text-center mb-0">${producto.price} </p>
            <p className='text-justify'>{ producto.detail }</p> 
            <Counter />
        </div>
            
    </div>
    )
}

export default ItemDetail