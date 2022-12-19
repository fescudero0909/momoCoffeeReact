
import './CartWidget.css'


const CartWidget = () =>{
    return (
        <div className='cart'>
            <img className='cart-img' src= { '../../img/carrito.png' } alt="" />
            <p className='cart-counter'>3</p>
        </div>
        
    
    );
}

export default CartWidget;