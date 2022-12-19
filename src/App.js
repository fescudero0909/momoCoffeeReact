import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';





function App() {
  
  return (
    <div className="App">
      
      <NavBar />
      
      <div>
      <Routes>
        
        <Route path="/" element={<ItemListContainer greeting = {'Café de Especialidad'} /> }/>
        <Route path="/category/:categoryId" element={<ItemListContainer greeting = {'Café de Especialidad'} /> }/>
        <Route path="/detail/:productId" element={<ItemDetailContainer/> }/>
          
        
        
      
      </Routes>
      </div>
    </div>
  );
}

export default App;
