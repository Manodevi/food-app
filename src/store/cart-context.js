import React from 'react';

// Creating context to manage cart items
const initialContext = {
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    updateItem: (item) => {},
    clearCart: () => {}
  };

const CartContext = React.createContext(initialContext);

export default CartContext;