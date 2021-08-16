import Button from '../UI/Button';
import CartContext from '../../store/cart-context';
import React from 'react';

const CartButton = props => {
  const CartCtx = React.useContext(CartContext);

  const buttonProps = {
    button: {
      className: "cart-header btn", type: "button"
    }
  };
  return (
    <Button {...buttonProps}>
      <span>Cart</span>
      <span id = "cart-items">{CartCtx.totalAmount}</span>
    </Button>
  );
};

export default CartButton;