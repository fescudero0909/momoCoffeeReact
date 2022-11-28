import Cards from './Cards';


function ItemListContainer ({greeting}){
    return (
        <div className= 'list_container'>
            <h1>{ greeting }</h1>
            <Cards />
        </div>
    );
} 

export default ItemListContainer;