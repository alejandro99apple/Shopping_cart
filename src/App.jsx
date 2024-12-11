import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import ProductListing from './components/ProductListing';
import ShoppingCart from './components/ShoppingCart';
import './styles/App.css';

const App = () => {
    return (
        <CartProvider>
            <Router>
                <Header/>
                <Routes>
                    <Route path="*" element={<LandingPage />} />
                    <Route path="/products" element={<ProductListing />} />
                    <Route path="/cart" element={<ShoppingCart />} />
                </Routes>
            </Router>
        </CartProvider>
    );
};

export default App;