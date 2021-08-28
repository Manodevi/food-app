import { useState } from 'react';

const useCheckoutValidation = () => {
  const [ inputValid, setInputValid ] = useState('');
  
  const blurchangeHandler = inputValid => {    
    setInputValid(inputValid.valid);
  };

  return [
    inputValid,
    blurchangeHandler
  ];
};

export default useCheckoutValidation;