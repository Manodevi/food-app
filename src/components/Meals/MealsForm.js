import Input from '../UI/Input';
import Button from '../UI/Button';
import React from 'react';

const MealsForm = props => {
  const numberOfItemsRef = React.createRef(props.input.id);

  const buttonProps = {button: {
    type: "submit",
    className: "btn btn-green"
  }};

  const submitHandler = event => {
    event.preventDefault();
    const idPhrase = 'price_meals_';

    // getting input value from ref
    const enteredInput = numberOfItemsRef.current.value;
    
    const itemId = numberOfItemsRef.current.id.substr(idPhrase.length);

    const itemDetails = {
        id: itemId,
        itemsCount: +enteredInput,
        price: +numberOfItemsRef.current.attributes.price.value
    };
  };
  return (
      <form onSubmit = {submitHandler}>
        <Input {...props.input} ref = {numberOfItemsRef} />
        <Button {...buttonProps}>Add</Button>
      </form>
  );
};

export default MealsForm;