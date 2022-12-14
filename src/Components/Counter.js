import './Counter.css'
import  React,  {useState}  from "react";

const Counter = () =>{
    const [add, setAdd] = useState(0)

    const handleClickAdd = () =>{
        setAdd(add + 1)
    } 

    const handleClickRest = () =>{
        setAdd(add - 1)
    } 
    
    
    return(
        <div className="counter col-3 text-center">
            <button className="counterBtn m-2" onClick= { handleClickRest }>-</button>
            {add}
            <button className="counterBtn m-2" onClick= { handleClickAdd }>+</button>          
        </div>

    )



};

export default Counter;