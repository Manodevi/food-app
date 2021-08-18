import Button from '../UI/Button';
import CartContext from '../../store/cart-context';
import React, { useEffect, useState} from 'react';

const CartButton = props => {
  const CartCtx = React.useContext(CartContext);

  const { items } = CartCtx;
  const [cartBtnHighlighted, setCartBtnHighlighted] = useState(false);

  // updating the cart header with updated total number of items
  const totalItems = CartCtx.items.reduce((itemCount, item) => {
      return itemCount + item.count;
  }, 0);

  // useEffect - to make header cart button bumping animation 0.3s when updating the cart
  // using the state and cart items dependency and clearing out the state on clean up
  useEffect(() => {
    if (items.length > 0) {
      setCartBtnHighlighted(true);
    }
    const btnTimer = setTimeout(() => {
      setCartBtnHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(btnTimer);
    }    
  }, [items]);  // items dependency

  // adding animation class based on the btn highlight state
  const btnClasses = `cart-header btn ${cartBtnHighlighted ? 'btn-animation' : ''}`;

  const buttonProps = {
    button: {
      title: "My Cart",
      className: btnClasses, type: "button", onClick: props.onClick
    }
  };
  return (
    <Button {...buttonProps}>
      <i className = "fas fa-shopping-cart"></i>
      <span>My Cart</span>
      {items.length > 0 && (
          <span id = "cart-items">{ totalItems }</span>
      )}
    </Button>
  );
};

export default CartButton;