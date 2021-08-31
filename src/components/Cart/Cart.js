import Card from '../UI/Card';
import Button from '../UI/Button';
import CartContext from '../../store/cart-context';
import React, { useState, useContext } from 'react';
import CartItem from './CartItem';
import CheckoutForm from '../Checkout/CheckoutForm.js';

const Cart = props => {
  // state to show checkout form
  const [ isCheckout, setIsCheckout ] = useState(false);
  // sending order details - true/false
  const [ isSubmittingOrder, setIsSubmittingOrder ] = useState(false);
  // submitted order details - true / false
  const [ isSubmittedOrder, setIsSubmittedOrder ] = useState(false);

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

  const submitHandler = orderDetails => {
    setIsSubmittingOrder(true);
    const FETCH_URL = 'https://react-food-app-e5bb3-default-rtdb.firebaseio.com/orders.json';

    const response = fetch(FETCH_URL, {
      method: 'POST',      
      body: JSON.stringify(orderDetails)
    })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => setIsSubmittedOrder(true))
    .catch(error => console.log(error));
    setIsSubmittingOrder(false);    
    cartCtx.clearCart();
  };

  const cartContent = <React.Fragment>{haveItems && <CartItem 
        items = {items}
        totalAmount = {totalAmount}
        onAddItem = {cartAddItemHandler}
        onRemoveItem = {cartRemoveItemHandler}
        />
    }

    { !haveItems && (<p>No items in the cart</p>) }
    <div className = "cart-buttons">
    <Button button = {{ className: 'btn btn-white', onClick: props.onClose}}>Close</Button>
    {haveItems && <Button button = {{className: 'btn btn-primary', onClick: checkoutHandler}}>Order</Button>}
    </div>

    {isCheckout && <CheckoutForm onConfirm = {submitHandler} />}
    </React.Fragment>;

    const submittingContent = <p>Sending Order details....</p>;
    const submittedContent = <React.Fragment>
      <p>Your order has been successfully submitted!</p><br/>
      <Button button = {{ className: 'btn btn-white', onClick: props.onClose}}>Close</Button>
      </React.Fragment>;

  return (    
      <Card className = "cart-modal card-light">        
        {!isSubmittingOrder && !isSubmittedOrder && cartContent}
        {isSubmittingOrder && !isSubmittedOrder && submittingContent}
        {!isSubmittingOrder && isSubmittedOrder && submittedContent}
      </Card>
  );
};

export default Cart;