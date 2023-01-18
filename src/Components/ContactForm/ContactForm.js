
import React, { useState } from 'react'
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


        </div>
            
    )

}

export default ContactForm


// const ContactForm = ({setContact}) => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [address, setAddress] = useState('');
//     const [message, setMessage] = useState('');


//     const handleContactForm = (e) => {
//         e.preventDefault();
        
//         //toggleVisibility.current.toggleVisibility();
//     }

//     // creo objeto con datos de contacto
//     const objContact ={
//         name,
//         email,
//         phone,
//         address,
//         message
//     }

//     // seteo datos de contacto en estado
//     setContact(objContact);
//     setName('');
//     setEmail('');
//     setPhone('');
//     setAddress('');
//     setMessage('');

//     return (
//         // cargamos el formulario
//         <div className="contactForm">
//             <div>Contacto</div>
//             <form onSubmit={handleContactForm}>
//                 <label className='labelContact' >
//                     Nombre:
//                     <input
//                         className='inputContact' 
//                         type="text" 
//                         value={name} 
//                         onChange={(e) => setName(e.target.value)}
//                     />
//                 </label>
//                 <label className='labelContact' >
//                     Telefono:
//                     <input
//                         className='inputContact' 
//                         type="text" 
//                         value={phone} 
//                         onChange={(e) => setPhone(e.target.value)}
//                     />
//                 </label>
//                 <label className='labelContact' >
//                     e-mail:
//                     <input
//                         className='inputContact' 
//                         type="text" 
//                         value={email} 
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                 </label>
//                 <label className='labelContact' >
//                     Direccion:
//                     <input
//                         className='inputContact' 
//                         type="text" 
//                         value={address} 
//                         onChange={(e) => setAddress(e.target.value)}
//                     />
//                 </label>
//                 <label className='labelContact' >
//                     Mensaje:
//                     <input
//                         className='inputContact' 
//                         type="text" 
//                         value={message} 
//                         onChange={(e) => setMessage(e.target.value)}
//                     />
//                 </label>
//                 <button className='btnContact' type="submit">Enviar</button>
//             </form>
//         </div>
//     )
// }

// export default ContactForm