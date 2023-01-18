import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import  { Route, Routes } from 'react-router-dom';
import React from 'react';
import { CartProvider } from './context/CartContext';
import Cart from './Components/Cart';
import ContactForm from './Components/ContactForm/ContactForm';




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
            <Route path="/cart" element={<Cart />}/>
            <Route path="/contact" element={<ContactForm />}/>
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>  
        </div>
      
      </CartProvider>
      
    </div>
  );
}

export default App;
