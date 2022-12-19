import  React, {useEffect, useState}  from "react";
import axios from 'axios';
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";




const ItemDetailContainer = () => {
  
    const [producto, setProducto] = useState({});
    let {productId} = useParams();

    useEffect((productId) =>{
        axios
        .get("./api/data.json")
        .then ((resolve) =>  resolve.data.find((producto) => producto.id === parseInt(productId)))
        .then (setProducto(productId))
        
        
    }, [productId] )// [] es para que se renderice una sola vez
  
    return (
        <ItemDetail key={producto.id}  producto={producto}/>
        
  )
}

export default ItemDetailContainer