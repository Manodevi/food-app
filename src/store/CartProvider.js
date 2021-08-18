import CartContext from './cart-context';
import React, { useReducer } from 'react';

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {

  // Add items to the cart state
  if (action.type === 'ADD') {
    const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
    let existingItem = state.items[existingItemIndex];

    let updatedItems;
    let updatedAmount;

    if (existingItem) {   // If items already exist in state, update that particular item
      updatedItems = [...state.items];
      const updatedItem = {...existingItem};
      if(action.from === 'CART') {       // update count by 1 if it is from Cart Modal
        updatedItem.count = updatedItem.count + 1;
        updatedAmount = state.totalAmount + action.item.price * 1;
      } else {    // It is from the meals list item
        updatedItem.count = updatedItem.count + action.item.count;
        updatedAmount = state.totalAmount + action.item.price * action.item.count;
      }
      
      updatedItems[existingItemIndex] = updatedItem;
    } else {    // Not already exist, so add the item newly to the cart state
      updatedItems = state.items.concat(action.item);
      updatedAmount = state.totalAmount + action.item.price * action.item.count;
    }

    return {
      items: updatedItems,
      totalAmount: updatedAmount
    }
  }

  // Remove item from the cart state
  if(action.type === 'REMOVE') {
    const existingItemIndex = state.items.findIndex(item => {
          return item.id === action.id; 
        }
      );

    const existingItem = state.items[existingItemIndex];
    const updatedAmount = state.totalAmount - existingItem.price;
    let updatedItems;

    if(existingItem.count === 1) { // If the removing item has only one count
      updatedItems = state.items.filter(item => item.id !== existingItem.id);      
    } else {  // else if has more count - just remove 1 count from it
      const updatedItem = {...existingItem};
      updatedItem.count -= 1;      
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
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
    cartDispatch({ type: 'ADD', item, from });
  };

  const removeItemHandler = id => {
    cartDispatch({ type: 'REMOVE', id });
  };

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