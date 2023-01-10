
import './CartWidget.css'
import {CiShoppingCart} from 'react-icons/ci'


const CartWidget = () =>{
    return (
        <div className='cart'>
            <a href="./"><CiShoppingCart className='cart-img'/></a>
            {/* <img className='cart-img' src= { '../../img/carrito.png' } alt="" /> */}
            <p className='cart-counter'>3</p>
        </div>
        
    
    );
}

export default CartWidget;