import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  
  // Agregar un producto al carrito
  const addToCart = (product, quantity) => {
    setCartItems(prevItems => {
      // Verificar si el producto ya está en el carrito
      const existingItemIndex = prevItems.findIndex(item => item.id === product.id);
      
      if (existingItemIndex >= 0) {
        // Si el producto ya existe, actualizar la cantidad
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity
        };
        return updatedItems;
      } else {
        // Si es un producto nuevo, agregarlo al carrito
        return [...prevItems, { ...product, quantity }];
      }
    });
  };
  
  // Remover un producto del carrito
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };
  
  // Actualizar la cantidad de un producto
  const updateQuantity = (productId, quantity) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };
  
  // Calcular el total del carrito
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      // Convertir el precio de formato "42.000,00 US$" a número
      const priceString = typeof item.price === 'string' 
        ? item.price.replace(/[^\d,]/g, '').replace(',', '.') 
        : item.price;
      const price = parseFloat(priceString);
      return total + (price * item.quantity);
    }, 0);
  };
  
  // Obtener el número total de items en el carrito
  const getCartItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };
  
  // Limpiar el carrito
  const clearCart = () => {
    setCartItems([]);
  };
  
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getCartItemCount,
    clearCart
  };
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};