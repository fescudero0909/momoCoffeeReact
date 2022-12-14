
import './Cards.css'
import  React from "react";



function Cards ({card}){

    return (
        <div className="tarjetaProducto col-12">
            <p className="producto">{card.names}</p>
            <img className="imgProducto img-fluid col-12" alt="">{card.img} </img>
            <p className="precio col-5 text-center mb-0">$ {card.price}</p> 
        </div> 
            
    );
} 

export default Cards;