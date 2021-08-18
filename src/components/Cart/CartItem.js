import React, { Fragment } from 'react';
import Button from '../UI/Button';

const CartItem = props => {
    return (
    <Fragment>
      <ul>
        <li>
          <div>Name</div>
          <div>Count</div>
          <div>Price</div>
        </li>
        { props.items.map(item => (
            <li key = {`cart_${item.id}`}>
              <div>{item.name}</div>
              <div className = "item-count">
                <Button button = {{className: "item-remove",
                  onClick: props.onRemoveItem.bind(null, item.id, 'CART')}}
                > - </Button>
                  
                {item.count}
                
                <Button button = {{className: "item-add",
                    onClick: props.onAddItem.bind(null, item, 'CART')}}
                  > + </Button>                
              </div>

              <div>{(item.count * item.price).toFixed(2)}</div>
            </li>
          ))
        }      
      </ul>
      <div className = "cart-total">
        <div>Total Amount</div>
        <div>{`AED ${props.totalAmount}`}</div>
      </div>
    </Fragment>
    );
};

export default CartItem;