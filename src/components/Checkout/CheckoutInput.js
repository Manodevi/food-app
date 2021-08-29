import useCheckoutValidation from "../../hooks/checkout-validation";
import { useRef } from 'react';

const CheckoutInput = props => {
  const inputRef = useRef();
  const [isValid, inputValue, blurchangeHandler] = useCheckoutValidation();

  const onBlurChangeHandler = () => {
    const inputValid = props.blurchangeHandler(inputRef.current.value);
    const inputName = inputRef.current.name;
    blurchangeHandler(inputValid);
    props.onFormInput(inputName, inputValue, isValid);
  };

  return (
    <div className={isValid === false ? "form-controls invalid" : "form-controls"}>
      <label htmlFor={props.input.name}>{props.label}</label>
      <div>
        <input {...props.input} 
                ref = {inputRef} 
                onBlur = {onBlurChangeHandler} 
                onChange = {onBlurChangeHandler} />
        { isValid === false && <p>{props.errorMessage}</p> }
      </div>
    </div>

  );
};

export default CheckoutInput;