
import './CartWidget.css'
import {CiShoppingCart} from 'react-icons/ci'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () =>{

    const { getQuantity} = useContext(CartContext)

    return (
            <Link to="/cart" className="btn">
                <div className='cartWidget'>
                    <a href="./"><CiShoppingCart className='cartImg'/></a>          
                    <span className='counterWidget '>{getQuantity()}</span>    
                </div>
            </Link>
    
    );
}

export default CartWidget;