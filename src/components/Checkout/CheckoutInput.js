import useCheckoutValidation from "../../hooks/checkout-validation";
import { useRef } from 'react';

const CheckoutInput = props => {
  const inputRef = useRef();
  const [isValid, blurchangeHandler] = useCheckoutValidation();

  const onBlurChangeHandler = () => {
    const inputValid = props.blurchangeHandler(inputRef.current.value);
    const inputName = inputRef.current.name;
    blurchangeHandler(inputValid);
    props.onFormInput(inputName, isValid);
  };

  return (
    <div className={isValid ? "form-controls" : "form-controls invalid"}>
      <label htmlFor={props.input.name}>{props.label}</label>
      <input {...props.input} 
              ref = {inputRef} 
              onBlur = {onBlurChangeHandler} 
              onChange = {onBlurChangeHandler} />
      { isValid === false && <p>{props.errorMessage}</p> }
    </div>

  );
};

export default CheckoutInput;