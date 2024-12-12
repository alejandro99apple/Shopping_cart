import React, { createContext, useState } from 'react';

// Crear el contexto del carrito
export const CartContext = createContext();

// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [plantsInCart, setPlantsInCart] = useState({}); // Estado para rastrear plantas en el carrito
    const [plants, setPlants] = useState([
        // Aquí puedes agregar algunas plantas de ejemplo
        { id: 1, name: 'Pothos', price: 10, description: 'Easy to care for indoor plant', image: `/images/planta1.jpg]}` },
        { id: 2, name: 'Ficus', price: 15, description: 'Popular indoor plant', image: '/images/planta2.jpg' },
        { id: 3, name: 'Sansevieria', price: 20, description: 'Resilient indoor plant', image: '/images/planta3.jpg' },
        { id: 4, name: 'Peace Lily', price: 25, description: 'Indoor plant that purifies the air', image: '/images/planta4.jpg' },
        { id: 5, name: 'Dracaena', price: 30, description: 'Easy care indoor plant', image: '/images/planta5.jpg' },
        { id: 6, name: 'Christmas Cactus', price: 12, description: 'Indoor plant with flowers', image: '/images/planta6.jpg' },
        { id: 7, name: 'Areca Palm', price: 40, description: 'Tropical indoor plant', image: '/images/planta7.jpg' },
        { id: 8, name: 'Lucky Bamboo', price: 18, description: 'Indoor plant that brings good luck', image: '/images/planta8.jpg' },
        { id: 9, name: 'Lavender', price: 15, description: 'Aromatic outdoor plant', image: '/images/planta9.jpg' },
        { id: 10, name: 'Geranium', price: 10, description: 'Colorful outdoor plant', image: '/images/planta10.jpg' },
        { id: 11, name: 'Rose', price: 25, description: 'Classic outdoor plant', image: '/images/planta11.jpg' },
        { id: 12, name: 'Hydrangea', price: 30, description: 'Outdoor plant with large flowers', image: '/images/planta12.jpg' },
        { id: 13, name: 'Cactus', price: 8, description: 'Low maintenance succulent plant', image: '/images/planta13.jpg' },
        { id: 14, name: 'Aloe Vera', price: 12, description: 'Succulent plant with medicinal properties', image: '/images/planta14.jpg' },
        { id: 15, name: 'Echeveria', price: 15, description: 'Ornamental succulent plant', image: '/images/planta15.jpg' },
        { id: 16, name: 'Jade Plant', price: 20, description: 'Popular succulent known for its resilience', image: '/images/planta16.jpg' },
        // Agrega más plantas según sea necesario
    ]);

    // Función para agregar una planta al carrito
    const addToCart = (plant) => {
        const existingItem = cartItems.find(item => item.id === plant.id);
        if (existingItem) {
            // Si la planta ya está en el carrito, incrementa la cantidad
            setCartItems(cartItems.map(item => 
                item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            // Si no está en el carrito, agrégala con cantidad 1
            setCartItems([...cartItems, { ...plant, quantity: 1 }]);
        }
        // Actualizar el estado de plantas en el carrito
        setPlantsInCart(prev => ({ ...prev, [plant.id]: true }));
    };

    // Función para eliminar una planta del carrito
    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
        // Actualizar el estado de plantas en el carrito
        setPlantsInCart(prev => ({ ...prev, [id]: false }));
    };

    // Función para actualizar la cantidad de una planta en el carrito
    const updateQuantity = (id, quantity) => {
        if (quantity <= 0) {
            removeFromCart(id);
        } else {
            setCartItems(cartItems.map(item => 
                item.id === id ? { ...item, quantity } : item
            ));
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, plants, plantsInCart }}>
            {children}
        </CartContext.Provider>
    );
};