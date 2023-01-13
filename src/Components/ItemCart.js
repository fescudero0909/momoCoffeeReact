import React from 'react'


function ItemCart({producto}) {

    //const {removeItem} = useCartContext()

    return (
        <div>
            <p>Producto: {producto.name}</p>
            <p>Precio: ${producto.price}</p>
            <p>Cantidad: {producto.quantity}</p>
            <p>{producto.img}</p>
            <p>Subtotal:${producto.quantity*producto.price} </p>
            {/* <button onClick={()=>removeItem(producto.id)}>Eliminar</button> */}
        </div>
    )
}

export default ItemCart