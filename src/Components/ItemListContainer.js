import Counter from './Counter';
import Cards from '../Components/Cards'
import  React, { useEffect, useState }  from "react";



function ItemListContainer ({greeting}){

    const [cards, setCards] = useState([]);

    useEffect(() =>{
        fetch("./api/data.json")
        .then ((response) => response.json())
        .then (data =>{
            setCards(data)
        });
    }, [] )

    return (
        <div className= 'list_container'>
            <h1>{ greeting }</h1>
            {cards.map ((card)=>(
                <Cards key={card.id} card= {card} />
            )) }
            
            
            <Counter />
        </div>
    );
} 

export default ItemListContainer;