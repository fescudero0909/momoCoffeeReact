
import  React, {useEffect, useState}  from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "./function";
import { Link } from 'react-router-dom';
import './ItemListContainer.css'



function ItemListContainer ({greeting}){
    
    //para obtener los datos de la api (puedo usarr axios o fetch)
    const [productos, setProductos] = useState([]);
    let { categoryId } = useParams();

    useEffect(() => {
        getProducts(categoryId)
            .then((productos) => setProductos(productos))
        }, [categoryId]);// [] es para que se renderice una sola vez

    
    return (
        <div className= 'list_container container-fluid text-center'>
            
            <h1>{ greeting }</h1>
            <div className="">
                <Link to={"/category/Cafes"}><button className="btnInicio col-3">Cafes</button></Link>
                <Link to={"/category/Accesorios"}><button className="col-3">Accesorios</button></Link>
            </div>
            <ItemList  productos={productos}/>
            
        </div>          
    
    );
} 

export default ItemListContainer;