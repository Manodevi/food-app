import useCheckoutValidation from "../../hooks/checkout-validation";
import { useRef } from 'react';

const CheckoutInput = props => {
  const inputRef = useRef();
  const [isValid, blurchangeHandler] = useCheckoutValidation();

  const onBlurChangeHandler = () => {
    const inputValid = props.blurchangeHandler(inputRef.current.value);
    const inputName = inputRef.current.name;
    console.log(inputName);
    blurchangeHandler(inputValid);
    props.onFormInput(inputName, isValid);
  };

  return (
    <div className="form-controls">
      <label htmlFor={props.input.name}>{props.label}</label>
      <input {...props.input} 
              ref = {inputRef} 
              onBlur = {onBlurChangeHandler} 
              onChange = {onBlurChangeHandler} />
    </div>
  );
};

export default CheckoutInput;