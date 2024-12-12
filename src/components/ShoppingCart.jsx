import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './ShoppingCart.css';


const ShoppingCart = () => {
    const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

    return (
        <div className="shopping-cart">
            <h2>Your Shopping Cart</h2>
            {cartItems.map(item => (
                <div className="item" key={item.id} style={{ margin: '10px 0', backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '150px', color: 'white' }}>
                    <h3>{item.name}</h3>
                    <p> ({item.quantity}) - Subtotal: ${item.price * item.quantity}</p>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                </div>
            ))}
            <h3>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</h3>
            <button >Checkout</button>
            <button style={{marginTop:'5px'}} onClick={() => window.location.href = '/products'}>Continue Shopping</button>
        </div>
    );
};

export default ShoppingCart;