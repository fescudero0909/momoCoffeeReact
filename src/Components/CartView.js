import React, { useContext } from 'react'
import {CartContext} from '../context/CartContext'
import { Link } from 'react-router-dom';



function CartView() {
    const {cart} = useContext(CartContext);

    // if (cart.length === 0) {
        return (
            <>
            <p>No hay elemento en el carrito</p>
            <Link to="/">Hacer compra</Link>
            </>
        )
    //};


    return (
        <div>
            {/* {cart.map((producto) => {
                return (
                    <ItemCart producto={producto} key={producto.id}/>
                )
            }
        )} */}
        </div>
    )
}

export default CartView