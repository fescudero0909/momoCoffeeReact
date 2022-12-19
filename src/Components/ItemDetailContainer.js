import  React, {useEffect, useState}  from "react";
import axios from 'axios';
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";




const ItemDetailContainer = () => {
  
    const [productos, setProductos] = useState([]);
    let {id} = useParams();

    useEffect((productId) =>{
        axios
        .get("./api/data.json")
        .then ((resolve) =>  resolve.data.find((producto) => producto.id === parseInt(productId)))
        .then (setProductos(productId))
        
        
    }, [id] )// [] es para que se renderice una sola vez
  
    return (
        <ItemDetail key={productos.id}  productos={productos}/>
        
  )
}

export default ItemDetailContainer