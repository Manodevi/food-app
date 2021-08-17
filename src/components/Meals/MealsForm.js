import Input from '../UI/Input';
import Button from '../UI/Button';
import React from 'react';

const MealsForm = props => { 
  // Creating ref for item count input field
  const numberOfItemsRef = React.createRef(props.input.id);

  const buttonProps = {button: {
    type: "submit",
    className: "btn btn-green"
  }};

  const submitHandler = event => {
    event.preventDefault();
    // getting input value from ref
    const enteredInput = numberOfItemsRef.current.value;
    props.onAddCart(enteredInput);
  };
  
  return (
      <form onSubmit = {submitHandler}>
        <Input {...props.input} ref = {numberOfItemsRef} />
        <Button {...buttonProps}>Add</Button>
      </form>
  );
};

export default MealsForm;