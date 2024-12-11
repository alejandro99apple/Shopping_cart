import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Header.css';

const Header = () => {
    const { cartItems } = useContext(CartContext);
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <header>
            <h1> Plant Paradise</h1>
            <nav>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to="/">Inicio</Link>
                    <Link to="/products">Productos</Link>
                    <Link style={{marginRight:'40px'}} to="/cart">Carrito</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
