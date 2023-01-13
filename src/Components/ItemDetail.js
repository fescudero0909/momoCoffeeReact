import React, { useContext} from 'react'
import './ItemDetail.css'
import Counter from './Counter'
import { BsArrow90DegLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'



const ItemDetail = ({producto}) => {
    
   const {addToCart} = useContext(CartContext)
    
    return (
        
        <div className='row justify-content-center'>            
            <Link to='/'><div className='arrow'><BsArrow90DegLeft /></div></Link>
            <div className="tarjetaProducto col-3 align-items-center">
                <p className="producto">{producto.name}</p>
                <img src={producto.img} alt='' className="imgProducto img-fluid col-12"/>
                <p className="precio col-12 text-center mb-0">${producto.price} </p>
                <p className='text-justify'>{ producto.detail }</p> 
                <Counter />
                <button className='btn btn-primary' onClick={addToCart} >Agregar al carrito</button>
            </div>
                
                
        </div>
            
    )
}

export default ItemDetail