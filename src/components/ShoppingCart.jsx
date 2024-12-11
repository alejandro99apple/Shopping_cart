import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './ShoppingCart.css';


const ShoppingCart = () => {
    const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

    return (
        <div className="shopping-cart">
            <h2>Tu Carrito</h2>
            {cartItems.map(item => (
                <div class="item" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <h3>{item.name}</h3>
                    <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <p>Subtotal: ${item.price * item.quantity}</p>
                </div>
            ))}
            <h3>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</h3>
            <button>Checkout</button>
        </div>
    );
};

export default ShoppingCart;