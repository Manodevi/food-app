const MealsListItem = props => {
  console.log(props.name);
  return (
    <li>
      <img src={props.img} alt = {props.name} />      
      <div className = "item-info">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
      <div className = "item-price">
        <div>AED {props.price.toFixed(2)}</div>
      </div>
    </li>
  );
};

export default MealsListItem;