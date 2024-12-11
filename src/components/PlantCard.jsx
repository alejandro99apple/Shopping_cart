import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './PlantCard.css';

const PlantCard = ({ plant }) => {
    const { cartItems, addToCart } = useContext(CartContext);
    const isAddedToCart = cartItems.some(item => item.id === plant.id);

    const handleAddToCart = () => {
        addToCart(plant);
    };

    return (
        <div className="plant-card">
            <img src={plant.image} alt={plant.name} />
            <h4 className="name">{plant.name}</h4>
            <p className="price">Precio: ${plant.price}</p>
            <p className="description">{plant.description}</p>
            <button className="btn" onClick={handleAddToCart} disabled={isAddedToCart}>
                {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
            </button>
        </div>
    );
};

export default PlantCard;