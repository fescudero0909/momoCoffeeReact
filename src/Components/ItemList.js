import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
  return (
    <div className='row just'>
        {productos.map((producto) =>(
            <Item producto={producto} key={producto.id} />
        
        ))}
    </div>
  )
}

export default ItemList