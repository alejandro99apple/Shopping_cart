import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Header.css';

const Header = () => {
    const { cartItems } = useContext(CartContext);
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const uniquePlantsCount = cartItems.length; // Contar plantas diferentes en el carrito

    return (
        <header>
            <h3><Link to="/"><img src='shopping_cart\public\icon.svg'></img> Plant Paradise</Link></h3>
            <nav>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to="/products">Plants</Link>
                    <Link style={{marginRight:'40px'}} to="/cart">Shopping Cart ({uniquePlantsCount})</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
