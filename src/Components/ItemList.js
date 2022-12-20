import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
  return (
    <div className='row justify-content-center'>
        {productos.map((producto) =>(
            <Item producto={producto} key={producto.id} />
        
        ))}
    </div>
  )
}

export default ItemList