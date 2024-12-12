import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import './ShoppingCart.css';

const ShoppingCart = () => {
    const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
    const [showCheckoutModal, setShowCheckoutModal] = useState(false);

    const handleCheckout = () => {
        setShowCheckoutModal(true);
    };

    const closeCheckoutModal = () => {
        setShowCheckoutModal(false);
    };

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
            <button onClick={handleCheckout}>Checkout</button>
            
            {showCheckoutModal && (
                <>
                    {/* Overlay que cubre toda la pantalla */}
                    <div 
                        className="modal-overlay" 
                        onClick={closeCheckoutModal}
                    />
                    <div className="checkout-modal">
                        <div className="modal-content">
                            <span className="close" onClick={closeCheckoutModal}>&times;</span>
                            <h2>Payment Methods</h2>
                            <div className="payment-methods">
                                <button>Credit Card</button>
                                <button>PayPal</button>
                                <button>Bank Transfer</button>
                                <button>Apple Pay</button>
                                <button>Google Pay</button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ShoppingCart;