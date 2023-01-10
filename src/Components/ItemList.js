import React from 'react'
import Item from './Item'


const ItemList = ({productos, loading}) => {
  return (
    <div className='row justify-content-center'>
        {loading && (
          <spinner>
            <div class="spinner-grow" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </spinner>
        )}
        {productos.map((producto) =>(
            <Item producto={producto} key={producto.id} />
        
        ))}
    </div>
  )
}

export default ItemList