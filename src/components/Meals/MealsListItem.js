import MealsForm from './MealsForm';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';

const MealsListItem = props => {
  // use Cart context on form submission - add to cart
  const cartCtx = useContext(CartContext);

  const inputId = `price_${props.id}`;
  const mealsFormInfo = {
      id: props.id,
      input: {
        id: inputId, 
        price: props.price,
        type: "number",
        min: "1",
        defaultValue: "1"
      },
    price: props.price
  };

  // Get the number of items from the form submission and frame item object to the cart context
  const addCartHandler = count => {
    const item = {
      id: props.id,
      name: props.name,
      price: +props.price,
      count: +count
    };
    cartCtx.addItem(item, '');
  };

  return (
    <li>
      <img src={props.img} alt = {props.name} />      
      <div className = "item-info">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
      <div className = "item-price">
        <div>AED {props.price.toFixed(2)}</div>
        <MealsForm 
          onAddCart = {addCartHandler}
          {...mealsFormInfo} 
          />
      </div>
    </li>
  );
};

export default MealsListItem;