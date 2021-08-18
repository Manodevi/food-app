import CartContext from './cart-context';
import React, { useReducer } from 'react';

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
    let existingItem = state.items[existingItemIndex];

    let updatedItems;
    let updatedAmount;

    if (existingItem) {
      updatedItems = [...state.items];
      const updatedItem = {...existingItem};
      if(action.from === 'CART') {       
        updatedItem.count = updatedItem.count + 1;
        updatedAmount = state.totalAmount + action.item.price * 1;
      } else {
        updatedItem.count = updatedItem.count + action.item.count;
        updatedAmount = state.totalAmount + action.item.price * action.item.count;
      }
      
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
      updatedAmount = state.totalAmount + action.item.price * action.item.count;
    }

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

  const addItemHandler = (item, from) => {
    cartDispatch({ type: 'ADD', item, from});
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