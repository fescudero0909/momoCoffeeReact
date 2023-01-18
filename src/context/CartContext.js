import React, {createContext, useState} from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();


export const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([]);
    
    //incorporar el item al carrito
    const addToCart = (item, cantidad) => {
        
        if (isInCart(item.id)) {
            
            sumarCantidad(item.id,cantidad)
            
        } else {    
            setCart([...cart, {...item, cantidad}])
        }
    };
    
    
    
    //verificar si el item ya está en el carrito (true/false)
    const isInCart = (id) => {
        return cart.some (producto => producto.id === id)
    }
    
    //sumar la cantidad de items en el carrito cuando coinciden los id
    const sumarCantidad = (id,cantidad) => {
        cart.map(
            (producto) => producto.id === id ? (producto.cantidad += cantidad) : producto
            )
        }
        
        //vaciar el carrito
        const clearCart = () => {
            setCart([]);
        }
        
        //eliminar un item del carrito
        const removeItem = (id) => {
            setCart(cart.filter((producto) => producto.id !== id))
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Producto eliminado del carrito',
                showConfirmButton: false,
                timer: 1000
            })
        }
        
    //obtener la cantidad de items en el carrito
    const getQuantity = () => {
        return cart.reduce((acum, producto) => acum + producto.cantidad, 0)
    }

        //obterner el total de la compra
    const getTotal =() => {
        return cart.reduce((acum, producto) => acum + producto.price * producto.cantidad, 0)
    }

    
    return( 
        <CartContext.Provider value={
            {
                cart, 
                addToCart, 
                isInCart, 
                clearCart,
                sumarCantidad,
                removeItem,
                getTotal,
                getQuantity,
            }}>
            
            {children}

        </CartContext.Provider>
    )

};  


