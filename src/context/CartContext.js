import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import React, {createContext, useState} from "react";
import { db } from "../db/firebase-config";

export const CartContext = createContext({});

const {Provider} = CartContext;

// //Creo un hook y es el que voy a usar para importar el contexto en los componentes
// export const useCartContext = () => useContext(CartContext);



export const CartProvider = ({defaultValue = [], children}) => {
    
    const [cart, setCart] = useState(defaultValue);
    const cartCollectionRef = collection(db, "cart");

    const getCart = async () => {
    const data = await getDocs(cartCollectionRef);
        setCart(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    
    //vaciar carrito
    const clearCart = () => {
        setCart([]);
    };

    //agregar productos al carrito
    const addToCart = async (id, quantity) => {
        
        if(isInCart(id)) {//si el producto ya esta en el carrito, sumarle 1 a la cantidad
            const newCart = [...cart];//creo una copia del carrito
            for (const element of newCart){//recorro la copia del carrito
                if (element.id === id){//si el id del producto es igual al id del producto que quiero agregar
                    element.quantity = element.quantity + quantity;//sumo la cantidad que ya tenia con la cantidad que quiero agregar
                }
            }
            setCart(newCart);//actualizo el carrito
        }else{
        
            const docRef  = doc(db, "productos", id);
            const docSnap = await getDoc(docRef);
            const producto = docSnap.data();
            await addDoc(cartCollectionRef, producto).then(({ id }) => {
                console.log(`Documento con ID ${id} agregado al carrito`);
                });
            setCart([...cart, producto]);
        }
}
    
    //encontrar productos en el carrito
    const isInCart = (id) => {
        return cart.find((producto) => producto.id === id);
    };
    

    
    //eliminar productos del carrito
    const remoFromCart = (id) => {
        const newCart = [...cart].filter((producto) => producto.id !== id);
        setCart(newCart);
    };


    // //contar productos en el carrito        
    // const getCartCount = () => {
    //     return cart.reduce((acc, producto) => acc + producto.quantity, 0);
    // };
    
    // //sumar precios de productos en el carrito
    // const getCartTotal = () => {
    //     return cart.reduce((acc, producto) => acc + producto.price * producto.quantity,0);
    // };
    
    const context ={
        cart,
        getCart,
        clearCart,
        addToCart,
        isInCart,
        remoFromCart,
    }
    
    return( 
        <Provider value={{context}}>
            {children}
        </Provider>
    )

};  


