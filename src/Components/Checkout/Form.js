import React from 'react'

const Form = () => {
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
        <div>
            <input 
                className='m-2 col-11'
                name='name' 
                type="text"
                placeholder='Nombre y Apellido'
                onChange={handleInputChange}
            />
        </div>
    )

}

export default Form