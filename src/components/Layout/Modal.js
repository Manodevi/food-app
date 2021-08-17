import { Fragment } from 'react';
import Cart from '../Cart/Cart';

const Modal = props => {

  return (
    <Fragment>
      <div className = "modal-background"  onClick = {props.onHideCart}></div>
      <div className = "modal-outer">
        <Cart onClose = {props.onHideCart} />
      </div>
    </Fragment>
  );
};

export default Modal;