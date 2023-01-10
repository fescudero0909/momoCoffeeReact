
import  React, { useEffect, useState }  from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import './ItemListContainer.css'
import { collection, getDocs} from "firebase/firestore";
import {db} from "../db/firebase-config";


function ItemListContainer ({greeting}){
    
    const [productos, setProductos] = useState([]);
    let { category } = useParams();
    const [loading, setLoading] = useState(true);
    const productsCollectionRef = collection(db, "productos");

    const getProducts = async (category) =>{
        const data = await getDocs(productsCollectionRef)
        setLoading(false)
        setProductos(data.docs.map(doc => ({...doc.data(), id: doc.id}))); 
        
    }

    
    useEffect (() =>{
        getProducts(category);
        
    }, [category])
    
    
        
    
    return (
        <div className= 'list_container container-fluid text-center'>
            
            <h1>{ greeting }</h1>
            <div className="">
                <Link to={"/category/Cafes"}><button className="btnInicio col-3">Cafes</button></Link>
                <Link to={"/category/Accesorios"}><button className="col-3">Accesorios</button></Link>
            </div>
            
            <ItemList  productos={productos} loading ={loading} />
            
        </div>          
    
    );
} 

export default ItemListContainer;