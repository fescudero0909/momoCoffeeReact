
import './NavBar.css'
import CartWidget from './CartWidget'
import { CiCoffeeBean } from 'react-icons/ci'
import { Link } from 'react-router-dom';

function NavBar (producto){
    return (
        <nav className="navbar navbar-expand-lg bg-color-nav">
            <div className="container-fluid">
                <Link to='/'>
                    <a data-aos="fade-right" className="navbar-brand col-9 col-lg-5" href="./index.html"><img className="w-50" src={ '../../img/logo.png' } alt=""/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </Link>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="./index.html">Productos <CiCoffeeBean /></a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#container-cards">Accesorios</a>
                        </li>
                        
                        <CartWidget />
                    </ul>
                </div>
            </div>
        </nav> 
    );
} 

export default NavBar;