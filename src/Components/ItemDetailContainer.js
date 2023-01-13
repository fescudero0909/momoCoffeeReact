import  React, {useContext, useEffect, useState}  from "react"; 
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import {db} from "../db/firebase-config";
import { CartContext } from "../context/CartContext";




const ItemDetailContainer = () => {

    const {addToCart} = useContext(CartContext)

    const [producto, setProducto] = useState({});
    let {id} = useParams();
    
    const getProduct = async (id) =>{
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setProducto(docSnap.data());
        } else {
            console.log('No existe')
        }
    }

    useEffect(() =>{
        getProduct (id)
        
    }, [id])



    return (
        <>
            <ItemDetail key='' producto={producto} addToCart ={addToCart} />
            
        </>
        
    )
}

export default ItemDetailContainer