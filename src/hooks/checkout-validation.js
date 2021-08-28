import { useState } from 'react';

const useCheckoutValidation = () => {
  const [ inputValid, setInputValid ] = useState();
  const [ inputValue, setInputValue ] = useState();
  
  const blurchangeHandler = inputValid => {
    setInputValue(inputValid.value);
    setInputValid(inputValid.valid);
  };

  return [
    inputValid,
    blurchangeHandler
  ];
};

export default useCheckoutValidation;