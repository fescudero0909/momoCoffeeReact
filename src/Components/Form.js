
import { addDoc, collection, getDocs } from 'firebase/firestore';
import React, { useState } from 'react'
import {db} from "../db/firebase-config"; 

function Form({setProducts}) {
    const [inputName, setInputName] = useState ("")
    const [inputCategory, setInputCategory] = useState ("")
    const [inputDetail, setInputDetail] = useState ("")
    const [inputPrice, setInputPrice] = useState ("")
    const [inputImg, setInputImg] = useState ("")
    const [inputQuantity, setInputQuantity] = useState ("")


    const createProduct = async (e) =>{
        e.preventDefault();
        const product ={
            name: inputName,
            category: inputCategory,
            detail: inputDetail,
            price: inputPrice,
            img: inputImg,
            quantity: inputQuantity


        }
        const productsCollectionRef = collection(db, "productos");
        addDoc(productsCollectionRef, product)
        .then(({id}) =>{
            console.log("doc agregado", id)
        });
        const data = await getDocs(productsCollectionRef);
        setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        
        setInputName("");
        setInputCategory("");
        setInputDetail("");
        setInputPrice("");
        setInputImg("");
        setInputQuantity("");


    };


    return (
        <form onSubmit={createProduct}>
            <input 
                type="text" 
                placeholder="Nombre" 
                onChange={(e) => setInputName(e.target.value)} 
                value= {inputName}
            />
            <input 
                type="text" 
                placeholder="Categoria" 
                onChange={(e) => setInputCategory(e.target.value)} 
                value= {inputCategory}
            />
            <input 
                type="text" 
                placeholder="Detalle"
                onChange={(e) => setInputDetail(e.target.value)} 
                value= {inputDetail}
            />
            <input 
                type="number" 
                placeholder="Price" 
                onChange={(e) => setInputPrice(e.target.value)} 
                value= {inputPrice}
            />
            <input 
                type="text" 
                placeholder="Img" 
                onChange={(e) => setInputImg(e.target.value)} 
                value= {inputImg}
            />
            <input 
                type="number" 
                placeholder="Cantidad" 
                onChange={(e) => setInputQuantity(e.target.value)} 
                value= {inputQuantity}
            />

        <button type="submit">Crear Producto</button>
        </form>
    )
}

export default Form