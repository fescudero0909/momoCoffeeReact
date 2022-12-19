
import  React, {useEffect, useState}  from "react";
import axios from 'axios';
import ItemList from "./ItemList";





function ItemListContainer ({greeting}){
    
    //para obtener los datos de la api (puedo usarr axios o fetch)
    const [productos, setProductos] = useState([]);
    


    useEffect((categoryId) =>{
        axios
        .get("./api/data.json")
        .then ((res) => res.categoryId ? res.data.filter((producto) => producto.category === categoryId) : setProductos(res.data))

    }, [] )// [] es para que se renderice una sola vez

    
//     useEffect(() =>{
//       fetch("./api/data.json")
//       .then ((response) => response.json())
//       .then (data =>{
//           setCards(data.products)
//       });
//   }, [] )

    
    return (
        <div className= 'list_container container-fluid'>
            
            <h1>{ greeting }</h1>
            <div className="row">
                <button className="col-3">Cafes</button>
                <button className="col-3">Accesorios</button>
            </div>
            <ItemList  productos={productos}/>
            
        </div>          
    
    );
} 

export default ItemListContainer;