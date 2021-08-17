import CartContext from './cart-context';
import React, { useReducer } from 'react';

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if(action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item);
    const updatedAmount = state.totalAmount + action.item.price * action.item.count;
    
    return {
      items: updatedItems,
      totalAmount: updatedAmount
    }
  }
  return defaultCartState;
};

// Seperate component for context provider to manage all actions in one file
const CartProvider = props => {
  const [cartState, cartDispatch] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (id, item) => {
    cartDispatch({ type: 'ADD', id, item });
  };

  const removeItemHandler = id => {};

  const updateItemHandler = item => {};

  const cartContextValue = {
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem: addItemHandler,
      removeItem: removeItemHandler,
      updateItem: updateItemHandler
    };

  return (
    <CartContext.Provider value = {cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;