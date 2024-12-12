import React, { createContext, useState } from 'react';

// Crear el contexto del carrito
export const CartContext = createContext();

// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [plantsInCart, setPlantsInCart] = useState({}); // Estado para rastrear plantas en el carrito
    const [plants, setPlants] = useState([
        // Aquí puedes agregar algunas plantas de ejemplo
        { id: 1, name: 'Pothos', price: 10, description: 'Easy to care for indoor plant', image: `https://getblooms.com/cdn/shop/articles/Pothos_Plant_Care_The_Easiest_Trailing_Houseplant.webp?v=1701182365` },
        { id: 2, name: 'Ficus', price: 15, description: 'Popular indoor plant', image: 'https://tusplantas.es/wp-content/uploads/2023/04/ficus-portada-1-e1683018072412.jpg' },
        { id: 3, name: 'Sansevieria', price: 20, description: 'Resilient indoor plant', image: 'https://image.made-in-china.com/202f0j00jtHqOvRrZKbL/Live-Plant-Golden-Hahnii-Sansevieria-Trifasciata.webp' },
        { id: 4, name: 'Peace Lily', price: 25, description: 'Indoor plant that purifies the air', image: 'https://hips.hearstapps.com/hmg-prod/images/peace-lily-plant-in-a-bright-home-royalty-free-image-1715860400.jpg?crop=0.675xw:1.00xh;0.0224xw,0&resize=1200:*' },
        { id: 5, name: 'Dracaena', price: 30, description: 'Easy care indoor plant', image: 'https://es.plantsfarm.com/uploads/202237056/madagascar-dragon-tree-dracaena-marginata59552676966.jpg' },
        { id: 6, name: 'Christmas Cactus', price: 12, description: 'Indoor plant with flowers', image: 'https://i0.wp.com/sugarcreekgardens.com/wp-content/uploads/2022/11/Christmas-Cactus-Coral-Red.jpg?fit=1000%2C1000&ssl=1' },
        { id: 7, name: 'Areca Palm', price: 40, description: 'Tropical indoor plant', image: 'https://binnybotanics.in/wp-content/uploads/2024/07/10-3.jpg' },
        { id: 8, name: 'Lucky Bamboo', price: 18, description: 'Indoor plant that brings good luck', image: 'https://images-na.ssl-images-amazon.com/images/I/518TQOzZSNL._SS400_.jpg' },
        { id: 9, name: 'Lavender', price: 15, description: 'Aromatic outdoor plant', image: 'https://www.sotogardens.com/cdn/shop/articles/lave.jpg?v=1669539874' },
        { id: 10, name: 'Geranium', price: 10, description: 'Colorful outdoor plant', image: 'https://covenantchristian.org/wp-content/uploads/2022/02/Geranium-Pink-scaled.jpg' },
        { id: 11, name: 'Rose', price: 25, description: 'Classic outdoor plant', image: 'https://carbethplants.co.uk/wp-content/uploads/2022/03/prideofengland3.jpg' },
        { id: 12, name: 'Hydrangea', price: 30, description: 'Outdoor plant with large flowers', image: 'https://pbndesign.com/wp-content/uploads/2023/09/Cityline-Rio-Hydrangea-min-1.webp' },
        { id: 13, name: 'Cactus', price: 8, description: 'Low maintenance succulent plant', image: 'https://cdn0.uncomo.com/es/posts/7/1/1/tipos_de_cactus_de_interior_51117_600_square.jpg' },
        { id: 14, name: 'Aloe Vera', price: 12, description: 'Succulent plant with medicinal properties', image: 'https://media.v2.siweb.es/uploaded_thumb_big/af31b8ffd55e9bc92c93c04c7f3fdd12/aloe_hercules.jpeg' },
        { id: 15, name: 'Echeveria', price: 15, description: 'Ornamental succulent plant', image: 'https://www.picturethisai.com/wiki-image/1080/153653709186793500.jpeg' },
        { id: 16, name: 'Jade Plant', price: 20, description: 'Popular succulent known for its resilience', image: 'https://cdn.shopify.com/s/files/1/0553/5711/2435/files/PLJDCEJRGL-W-Part1_480x480.webp?v=1711545757' },
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