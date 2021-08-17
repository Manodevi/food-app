import Card from '../UI/Card';
import Button from '../UI/Button';

const Cart = props => {

  return (    
      <Card className = "cart-modal card-light">
        <p>No items in the cart</p>
        <Button button = {
            { 
              className: 'btn btn-white',
              onClick: props.onClose
            }
          }
          >Close</Button>
        <Button button = {
            {
              className: 'btn btn-primary'
            }
          }>Order</Button>
      </Card>
  );
};

export default Cart;