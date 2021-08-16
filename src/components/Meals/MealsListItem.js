import MealsForm from './MealsForm';

const MealsListItem = props => {
  const inputId = `price_${props.id}`;
  const mealsFormInfo = {
      id: props.id,
      input: {
        id: inputId, 
        price: props.price,
        type: "number",
        min: "1"       
      },
    price: props.price
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
        <MealsForm {...mealsFormInfo} />
      </div>
    </li>
  );
};

export default MealsListItem;