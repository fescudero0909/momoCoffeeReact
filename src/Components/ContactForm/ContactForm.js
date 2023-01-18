
import { addDoc, collection, doc, getDoc, Timestamp, writeBatch } from '@firebase/firestore'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { CartContext } from '../../context/CartContext'
import { db } from '../../db/firebase-config'
import './ContactForm.css'



const ContactForm = () => {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: ''
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setContact({
            ...contact,
            [name]: value
        })
    }

    const handleContactForm = (e) => {
        e.preventDefault();
        console.log(contact)
    }




    const {cart, getTotal, clearCart} = useContext(CartContext)
    
        // creo estado para procesar orden
    const [processing, setProcessing] = useState(false)

    // creo funcion para confirmar orden
    const confirmOder = () => {
        setProcessing(true)
        const objOrder = {
            buyer: contact,             
            items: cart,
            total: getTotal(),
            //sincroniza la fecha con firebase
            date: Timestamp.fromDate(new Date())
        }
        
        // creo batch para actualizar stock
        const batch = writeBatch(db);
        const outOfStock = [];

        // si no hay productos sin stock 
        const executeOrder = () => {
            if(outOfStock.length === 0){
                addDoc (collection(db, 'orders'), objOrder)
                .then(({id}) =>{
                    batch.commit().then(() => {
                        
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: `La orden ${id} se ha procesado con exito. 
                                        Datos de contacto:
                                        - ${contact.name}
                                        - ${contact.email}
                                        - ${contact.phone}
                                        - ${contact.address}`,
                                
                                showConfirmButton: true,
                                
                            })
                        
                        clearCart()
                    })
                })
                .finally(() => setProcessing(false))
                
            }    
        }


        // recorro el carrito y actualizo el stock
        objOrder.items.forEach(prod => {
            getDoc(doc(db, "productos", prod.id))
                .then (resp =>{
                    if(resp.data().quantity >= prod.cantidad){
                        batch.update(doc(db, "productos", prod.id), {
                            stock: resp.data().quantity - prod.cantidad
                        })
                    } else {
                        outOfStock.push({...resp.data(), id: resp.id})
                    }
            }).catch(error => {
                console.log(error)
            }).then(() => {
                executeOrder()
            })
            
        })  
            
    }

    // si esta procesando la orden
    if (processing) {
        return (
            <div className='container-fluid '>
                <h1 className='emptyCart text-center'>Procesando compra...</h1>
            </div>
        )
    }
















    return (
        // cargamos el formulario
            
        <div className="contactForm col-5 ">
            
            <div className='text-center'>Completar datos</div>
            
            <form className='container-fluid row m-1 ' onSubmit={handleContactForm} >
                
                <input className='m-2 col-10'
                    name='name' 
                    type="text"
                    placeholder='Nombre'
                    onChange={handleInputChange}
                />
                
                <input className='m-2 col-10'
                    name='phone' 
                    type="text" 
                    placeholder='Telefono' 
                    onChange={handleInputChange}
                />
                
                <input className='m-2 col-10'
                    name='email' 
                    type="text" 
                    placeholder='e-mail' 
                    onChange={handleInputChange}
                />
                
                <input className='m-2 col-10'
                    name='address' 
                    type="text" 
                    placeholder='Direccion' 
                    onChange={handleInputChange}
                />
                
                <input className='m-2 col-10'
                    name='message' 
                    type="text" 
                    placeholder='Mensaje'
                    onChange={handleInputChange}
                />
                
                <button className='btnContact btn col-3 ' type="submit">Confirmar datos</button>
        
            </form>

            {(!processing && cart.length>0) &&<Link to="/cart"><button className='btnFin' onClick={()=> confirmOder()} >Finalizar compra</button> </Link>}

        </div>
            
    )

}

export default ContactForm


