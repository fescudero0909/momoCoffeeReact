import  React, { useEffect, useState}  from "react"; 
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import {db} from "../db/firebase-config";


const ItemDetailContainer = () => {
    
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);

    const {id} = useParams();

    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, "productos", id);
        
        getDoc(docRef).then(response => {
            const producto = {id: response.id, ...response.data()}
            setProducto(producto)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProducto({})
        })
    }, [id])

    
    return (
        <>
            {
                loading ? (
                    <spinner>
                        <div class="spinner-grow" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </spinner>)
                : producto ? 
                    <ItemDetail key={producto.id} producto={producto} />
                : (<h2>Producto no Encontrado</h2>
            )}
            
            
            
            {/* <ItemDetail key={producto.id} producto={producto} loading={loading}  /> */}
        
        </>
        
    )
}

export default ItemDetailContainer