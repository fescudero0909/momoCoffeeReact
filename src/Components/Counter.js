import './Counter.css'
import  React,  {useState}  from "react";


const Counter = ({quantity, onAdd}) =>{
    
    const [number, setNumber] = useState(0);
    
    const add =() =>{
        number < quantity && setNumber(number + 1);
    }
    
    const rest =() =>{
        number > 0 && setNumber(number - 1);
    }

    
    return(
        <div className="counter row text-center">
            <div className='col-6'>
                <div className='row justify-content-center'>
                    <button className="counterBtn m-2 col-3 text-center " onClick= { rest}>-</button>
                        <p className='col-3 mt-2'>{number}</p>
                    <button className="counterBtn m-2 col-3" onClick= { add }>+</button>          
                </div>
            </div>
            <div className='col-6'>
                <button className="btnAgregar btn-primary" onClick= {() => onAdd(number )}>Agregar al carrito</button>
                
            </div>
            
        </div>

    )



};

export default Counter;