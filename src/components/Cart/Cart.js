import Card from '../UI/Card';
import Button from '../UI/Button';
import CartContext from '../../store/cart-context';
import { useState, useContext } from 'react';
import CartItem from './CartItem';
import CheckoutForm from '../Checkout/CheckoutForm.js';

const Cart = props => {
  // state to show checkout form
  const [ isCheckout, setIsCheckout ] = useState(false);

  // to get details from cart context
  const cartCtx = useContext(CartContext);
  const items = [...cartCtx.items];
  const totalAmount = cartCtx.totalAmount;

  let haveItems = false;

  const cartAddItemHandler = (item, from) => {
    cartCtx.addItem(item, from);
  }

  const cartRemoveItemHandler = (id, from) => {
    cartCtx.removeItem(id, from);
  }

  if(items.length > 0) {
    haveItems = true;
  }

  const checkoutHandler = () => {
    setIsCheckout(true);
  };

  return (    
      <Card className = "cart-modal card-light">        
        {haveItems && <CartItem 
                            items = {items}
                            totalAmount = {totalAmount}
                            onAddItem = {cartAddItemHandler}
                            onRemoveItem = {cartRemoveItemHandler}
                            />
        }
        
        { !haveItems && (<p>No items in the cart</p>) }
        <div className = "cart-buttons">
          <Button button = {
              { 
                className: 'btn btn-white',
                onClick: props.onClose
              }
            }
            >Close</Button>
            {haveItems && <Button button = {
              {
                className: 'btn btn-primary',
                onClick: checkoutHandler
              }
            }>Order</Button>}
          </div>

          {isCheckout && <CheckoutForm />}
      </Card>
  );
};

export default Cart;