import CartContext from './cart-context';

// Seperate component for context provider to manage all actions in one file
const CartProvider = props => {
  const addItemHandler = item => {console.log(item)};

  const removeItemHandler = id => {};

  const updateItemHandler = item => {};

  const cartContextValue = {
      items: [],
      totalAmount: 0,
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