import { useState } from 'react';

const useCheckoutValidation = () => {
  const [ inputValid, setInputValid ] = useState('');
  const [ inputValue, setInputValue ] = useState('');
  
  const blurchangeHandler = inputValid => {    
    setInputValid(inputValid.valid);
    setInputValue(inputValid.value);
  };

  return [
    inputValid,
    inputValue,
    blurchangeHandler
  ];
};

export default useCheckoutValidation;