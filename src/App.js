import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import  { Route, Routes } from 'react-router-dom';
import Form from './Components/Form';
import React from 'react';
import { CartProvider } from './context/CartContext';
import CartView from './Components/CartView';




function App() {

      
  return (
    <div className="App">
      
      <CartProvider>
        
        <NavBar />
              
        <div>
          <Routes>    
            <Route path="/" element={<ItemListContainer greeting = {'Café de Especialidad'} /> }/>
            <Route path="/category/:categoryId" element={<ItemListContainer greeting = {'Café de Especialidad'} /> }/>
            <Route path="/item/:id" element={<ItemDetailContainer /> }/>
            <Route path="/create" element={<Form />}/>
            <Route path="/cart" element={<CartView />}/>
          </Routes>  
        </div>
      
      </CartProvider>
      
    </div>
  );
}

export default App;
