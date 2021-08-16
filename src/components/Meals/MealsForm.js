import Input from '../UI/Input';
import Button from '../UI/Button';
import React from 'react';

const MealsForm = props => {
  const ref = React.createRef(props.input.id);

  const buttonProps = {button: {
    type: "submit",
    className: "btn btn-green"
  }}
  const onsubmitHandler = event => {
    event.preventDefault();
  };
  return (
      <form onSubmit = {onsubmitHandler}>
        <Input {...props.input} ref = {ref} />
        <Button {...buttonProps}>Add</Button>
      </form>
  );
};

export default MealsForm;