

import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import PlantCard from './PlantCard';
import './ProductListing.css';

const ProductListing = () => {
    const { plants, addToCart } = useContext(CartContext);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 6; // Cambiado a 6 cards por página

    const handleNextPage = () => {
        if ((currentPage + 1) * itemsPerPage < plants.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const currentPlants = plants.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    return (
        <div className="product-listing">
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '20px' }}>
                {currentPlants.map(plant => (
                    <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
                ))}
            </div>
            <div style={{ marginTop:'10px'}}>
                <button class="action_buttons" onClick={handlePrevPage} disabled={currentPage === 0}>Previous</button>
                <button class="action_buttons" onClick={handleNextPage} disabled={(currentPage + 1) * itemsPerPage >= plants.length}>Next</button>
            </div>
        </div>


        
    );
};

export default ProductListing;