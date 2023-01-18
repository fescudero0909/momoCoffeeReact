import React, { useContext, useState } from 'react'
import './ItemDetail.css'
import Counter from './Counter'
import { BsArrow90DegLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'
import Swal from 'sweetalert2';




const ItemDetail = ({producto, loading}) => {
    
    const [quantity, setQuantity] = useState(0)
    const {addToCart} = useContext(CartContext)

        
    const onAdd = (cantidad) =>{
        setQuantity(cantidad);
        addToCart(producto, cantidad);
        
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Producto agregado al carrito',
                showConfirmButton: false,
                timer: 1000
            })
        
    }


    
    
    return (
        
        <div className="row justify-content-center">            
            <Link to='/'><div className="arrow btn"><BsArrow90DegLeft />Volver</div></Link>
            
            
            <div className="tarjetaProducto row align-items-center">
                
                {loading && (
                    <spinner>
                        <div class="spinner-grow" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </spinner>
                )}
                <div className='col-6'>
                    <p className="producto ">{producto.name}</p>
                    <img src={producto.img} alt='' className="imgProductoDetalle img-fluid "/>
                    <p className="precio text-center mb-0">${producto.price} </p>
                </div>
                <div className='col-6'>
                    <p className='text-justify'>{ producto.detail }</p> 
                    {quantity === 0 ? (<Counter quantity={producto.quantity} onAdd={onAdd} />) :(
                        <>
                        <Link to="/cart">
                            <button className="btnFinalizar">Terminar compra</button>
                        </Link>
                        <Link to="/">
                            <button className="btnSeguirComprando">Seguir comprando</button>  
                        </Link>
                        </>
                    )}
                </div>
                
                
            </div>
                
                
        </div>
            
    )
}

export default ItemDetail