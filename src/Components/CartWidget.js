
import './CartWidget.css'

const CartWidget = () =>{
    return (
        <div className='cart'>
            <img className='cart-img' src= "https://res.cloudinary.com/dugnhebhz/image/upload/v1669384860/carrito_ep0v3y.png" alt="" />
            <p className='cart-counter'>3</p>
        </div>
        
    
    );
}

export default CartWidget;