import React, { createContext, useState } from 'react';

// Crear el contexto del carrito
export const CartContext = createContext();

// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [plants, setPlants] = useState([
        // Aquí puedes agregar algunas plantas de ejemplo
        { id: 1, name: 'Pothos', price: 10, description: 'Planta de interior fácil de cuidar', image: 'shopping_cart/public/planta1.jpg' },
        { id: 2, name: 'Ficus', price: 15, description: 'Planta de interior popular', image: 'shopping_cart/public/planta2.jpg' },
        { id: 3, name: 'Ficus', price: 35, description: 'Planta de interior popular', image: 'shopping_cart/public/planta2.jpg' },
        { id: 4, name: 'Ficus', price: 22, description: 'Planta de interior popular', image: 'shopping_cart/public/planta2.jpg' },
        { id: 5, name: 'Ficus', price: 22, description: 'Planta de interior popular', image: 'shopping_cart/public/planta2.jpg' },
        { id: 6, name: 'Ficus', price: 22, description: 'Planta de interior popular', image: 'shopping_cart/public/planta2.jpg' },
        { id: 7, name: 'Ficus', price: 22, description: 'Planta de interior popular', image: 'shopping_cart/public/planta2.jpg' },
        { id: 8, name: 'Ficus', price: 22, description: 'Planta de interior popular', image: 'shopping_cart/public/planta2.jpg' },
        { id: 9, name: 'Ficus', price: 22, description: 'Planta de interior popular', image: 'shopping_cart/public/planta2.jpg' },
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
    };

    // Función para eliminar una planta del carrito
    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
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
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, plants }}>
            {children}
        </CartContext.Provider>
    );
};