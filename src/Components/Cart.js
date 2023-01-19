import React, { useContext, useState } from 'react'
import './Cart.css'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { BsCartXFill } from 'react-icons/bs';
import { BsArrow90DegLeft } from 'react-icons/bs';
import {FaTrash} from 'react-icons/fa';

function Cart() {
    const {cart, removeItem, getTotal, clearCart} = useContext(CartContext)
    
 
    //si el carrito esta vacio 
    if (cart.length === 0) {
        return (
            <div className=' justify-content-center m-5'>
                <h1 className='emptyCart text-center'>Carrito vacio <BsCartXFill className='empty-car' /></h1>
                <Link to="/" className='row justify-content-center' ><BsArrow90DegLeft className='arrowEmpty' /></Link>
            </div>
        )
    }


    return (
        <div className='container-fluid '>
            
            {/* si el carrito no esta vacio   */}
            { 
                cart.map((producto) => {
                    return(
                        <div key={producto.id} className='cartProduct container-fluid m-4'>
                            <div className='row align-items-center justify-content-center'> 
                                <img src={producto.img} alt='' className="img-fluid col-2"/>
                                <h2 className='col-3 text-center '>{producto.name}</h2>
                                <p className='col-3'>Precio: ${producto.price} x  unid.</p>
                                <p className='col-2'>Cantidad: {producto.cantidad} unid.</p>
                                <button onClick={() =>removeItem(producto.id)} className='btnDelete col-1' ><FaTrash /></button>
                            </div>
                            
                        </div>
                    )
            })}


            {/* footer con los botones y el total */}
            <footer className='footer'>
                <p className='cartFooter justify-content-center text-center mb-5'>Total a pagar: ${getTotal()}</p>
                {/* {(!processing && cart.length>0) && <p className='cartFooter justify-content-center text-center mb-5'>Total a pagar: ${getTotal()}</p>} */}


                <div className='col-12'>
                    <button className='btnCancel' onClick={() => clearCart()} >Cancelar compra</button>
                    <Link to="/"><button className='btnSeguirComprandoCart'>Seguir comprando</button> </Link>
                    <Link to="/checkout" ><button className='btnCheckout'>Checkout</button> </Link>
                    {/* {(!processing && cart.length>0) &&<button className='btnCancelar' onClick={() => clearCart()} >Cancelar compra</button>}
                    {(!processing && cart.length>0) &&<Link to="/"><button className='btnSeguirComprandoCart'>Seguir comprando</button> </Link>} */}
                    {/* {(!processing && cart.length>0) &&<Link to=""><button className='btnFin' onClick={()=> confirmOder()} >Finalizar compra</button> </Link>} */}
                </div>
                
            </footer>
        </div>
    )
}

export default Cart