import React, { useContext, useState } from 'react'
import './Cart.css'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import {  collection,  addDoc, writeBatch, getDoc, doc, Timestamp} from "firebase/firestore";
import {db} from "../db/firebase-config";
import ContactForm from './ContactForm/ContactForm';
import Swal from 'sweetalert2';
import { BsCartXFill } from 'react-icons/bs';
import { BsArrow90DegLeft } from 'react-icons/bs';


function Cart() {
    const {cart, removeItem, getTotal, clearCart} = useContext(CartContext)
    const {contact} = ContactForm()
    

    // creo estado para procesar orden
    const [processing, setProcessing] = useState(false)

    // creo funcion para confirmar orden
    const confirmOder = () => {
        setProcessing(true)
        const objOrder = {
            buyer: 'xxxxxx',             
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
                                title: `La orden ${id} se ha procesado con exito. Datos de contacto: ${objOrder.buyer}`,
                                showConfirmButton: true,
                                
                            })
                        
                        clearCart()
                    })
                })
                .finally(() => setProcessing(false))
                
                } else {
                    
                        Swal.fire({
                            position: 'top-end',
                            icon: 'error',
                            title: 'No hay stock suficiente de algunos productos',
                            showConfirmButton: false,
                            timer: 1000
                        })
                        
                        setProcessing(false)
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

    //si el carrito esta vacio 
    if (cart.length === 0) {
        return (
            <div className=' justify-content-center m-5'>
                <h1 className='emptyCart text-center'>Carrito vacio <BsCartXFill className='empty-car' /></h1>
                <Link to="/" className='row justify-content-center' ><BsArrow90DegLeft className='arrowEmpty' /></Link>
            </div>
        )
    }


    return (
        <div className='container-fluid '>
            
            {/* si el carrito no esta vacio   */}
            { 
                cart.map((producto) => {
                    return(
                        <div key={producto.id} className='cartProduct container-fluid m-4'>
                            <div className='row align-items-center justify-content-center'> 
                                <img src={producto.img} alt='' className="img-fluid col-2"/>
                                <h2 className='col-3 text-center '>{producto.name}</h2>
                                <p className='col-3'>Precio: ${producto.price} x  unid.</p>
                                <p className='col-2'>Cantidad: {producto.cantidad} unid.</p>
                                <button onClick={() =>removeItem(producto.id)} className='btnDelete col-1' >X</button>
                            </div>
                            
                        </div>
                    )
            })}


            {/* footer con los botones y el total */}
            <footer className='footer'>
                {(!processing && cart.length>0) && <p className='cartFooter justify-content-center text-center mb-5'>Total a pagar: ${getTotal()}</p>}

            {/* formulario de contacto */}
                <ContactForm />

                <div className='col-12'>
                    {(!processing && cart.length>0) &&<button className='btnCancelar' onClick={() => clearCart()} >Cancelar compra</button>}
                    {(!processing && cart.length>0) &&<Link to="/"><button className='btnSeguirComprandoCart'>Seguir comprando</button> </Link>}
                    {(!processing && cart.length>0) &&<Link to=""><button className='btnFin' onClick={()=> confirmOder()} >Finalizar compra</button> </Link>}
                </div>
                {/* {(!processing && (contact.name !=='' && contact.email !=='' && contact.phone !=='' && contact.address !=='' && contact.message !=='' )) && 
                    <div className='col-12'>
                        <h4>Nombre: {contact.name}</h4>
                        <h4>email: {contact.email}</h4>
                        <h4>Teléfono: {contact.phone}</h4>
                        <h4>Dirección: {contact.address}</h4>
                        <h4>Mensaje: {contact.message}</h4>
                        <button onClick={() => setContact({name: '', email: '', phone: '', address: '', message: ''})} className='btn' >Continuar</button>                        
                    </div>
                }
                {(!processing && cart.length)>0 && <div buttonLabelShow={(contact.name !=='' && contact.email !=='' && contact.phone !=='' && contact.address !=='' && contact.message !=='')} className='col-12'>
                                                        <ContactForm setContact={setContact} />
                                                    </div>}
                 */}
            </footer>
        </div>
    )
}

export default Cart