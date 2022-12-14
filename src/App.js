import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import  React  from "react";




function App() {

  return (
    <div className="App">
      
      <NavBar />
      <ItemListContainer greeting = {'Bienvenidos'} />

    </div>
  );
}

export default App;
