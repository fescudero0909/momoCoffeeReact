
import { addDoc, collection, doc, getDoc, Timestamp, writeBatch } from '@firebase/firestore'
import React, { useContext, useState } from 'react'
import Swal from 'sweetalert2'
import { CartContext } from '../../context/CartContext'
import { db } from '../../db/firebase-config'
import './Checkout.css'


// ====== CREO COMPONENTE CHECKOUT  CON LOS DATOS DE CONTACTO ======
const Checkout = () => {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        email2: '',
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
    
    // const validarEmail = (value) => {
        
    //     (value === contact.email) ? console.log('son iguales') : console.log('no son iguales')
        
    // }


    // ========= PROCESO DE ORDEN =========
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
                                        
                                        ${contact.name}
                                        ${contact.email}
                                        ${contact.phone}
                                        ${contact.address}`,
                                
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
        // cargamos el formulario de contacto   
        <div className='container-fluid '>
            
            <div className="contactForm row ">
                    
                <form className='container-fluid m-1 col-5 ' onSubmit={handleContactForm} >
                    <div className='text-center'>Completar datos antes de finalizar la compra</div>
                    
                    <input className='m-2 col-11'
                        name='name' 
                        type="text"
                        placeholder='Nombre y Apellido'
                        onChange={handleInputChange}
                    />
                        
                        
                    <input className='m-2 col-11'
                        name='phone' 
                        type="text" 
                        placeholder='Telefono' 
                        onChange={handleInputChange}
                    />
                    
                    <input className='m-2 col-11'
                        name='email' 
                        type="text" 
                        placeholder='e-mail' 
                        onChange={handleInputChange}
                    />

                    <input className='m-2 col-11'
                        name='email2' 
                        type="text" 
                        placeholder='repetir e-mail' 
                        onChange={handleInputChange}
                        //function={validarEmail}
                        
                    />
                    
                    
                    <input className='m-2 col-11'
                        name='address' 
                        type="text" 
                        placeholder='Direccion' 
                        onChange={handleInputChange}
                    />
                    
                    <input className='m-2 col-11'
                        name='message' 
                        type="text" 
                        placeholder='Mensaje'
                        onChange={handleInputChange}
                    />
                    <div className='row justify-content-center'>
                        <button className='btnContact btn ' type="submit">Confirmar datos</button>

                    </div>
                </form>

                <div className='col-5'>
                    <h3 className='text-center' >Resúmen de compra</h3>
                    <table className='table table-bordered  '>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody className='table table-bordered '>
                                
                            {cart.map(producto => {
                                return(
                                    <tr key={producto.id}>
                                        <td className='text-center'>{producto.name}</td>
                                        <td className='text-center'>${producto.price}</td>
                                        <td className='text-center'>{producto.cantidad}</td>
                                        <td className='text-center'>${producto.price * producto.cantidad}</td>
                                    </tr>

                            )})}    
                            <tr>
                                <td colSpan='3' className='text-end fw-bold'>Total</td>
                                <td colSpan='3' className='text-center fw-bold'>${getTotal()}</td>
                            </tr>
                                
                        </tbody>

                    </table>
                </div>
                

            </div>
            
            <div className='row justify-content-center'>
                {(!processing && cart.length>0) &&<button className='btnFin' onClick={()=> confirmOder()} >Finalizar compra</button>}

            </div>

        </div>    
    )

}

export default Checkout


