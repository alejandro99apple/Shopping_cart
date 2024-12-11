import React, { useState } from 'react';
import './PlantCard.css';

const PlantCard = ({ plant, addToCart }) => {
    const [added, setAdded] = useState(false);

    const handleAddToCart = () => {
        addToCart(plant);
        setAdded(true);
    };

    return (
        <div className="plant-card">
            <img src={plant.image} alt={plant.name} />
            <h4 class="name">{plant.name}</h4>
            <p class="price">Precio: ${plant.price}</p>
            <p class="description">{plant.description}</p>
            <button class="btn" onClick={handleAddToCart} disabled={added}>
                {added ? 'Added to Cart' : 'Add to Cart'}
            </button>
        </div>
    );
};

export default PlantCard;