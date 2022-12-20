import  React, {useEffect, useState}  from "react";
//import axios from 'axios';
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import {getProductById} from "./function"




const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({});
    let {id} = useParams();

    useEffect(() => {
        getProductById(id)
            .then((producto) => setProducto(producto))
        }, [id]);

    

    return (
        <>
            <ItemDetail key='' producto={producto}/>
        </>
        
    )
}

export default ItemDetailContainer