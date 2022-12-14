
import './CartWidget.css'

import carrito from '../img/carrito.png';

const CartWidget = () =>{
    return (
        <div className='cart'>
            <img className='cart-img' src= { carrito } alt="" />
            <p className='cart-counter'>3</p>
        </div>
        
    
    );
}

export default CartWidget;