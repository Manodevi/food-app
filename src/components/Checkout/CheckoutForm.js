import CheckoutInput from './CheckoutInput';
import Button from '../UI/Button';
import { useState } from 'react';

const allInputsValidity = {
  checkout_name: '', 
  checkout_email: '',
  checkout_street: '',
  checkout_city: '',
  checkout_zipcode: ''
};

const CheckoutForm = () => {
  // state for every input value validation - for form
  const [isFormInputValid, setIsFormInputValid] = useState(allInputsValidity);
  
  const formInputHandler = (inputName, inputValidity) => {
    setIsFormInputValid(prevState => {
      const newFormState = {...prevState};
      newFormState[inputName] = inputValidity;
      return newFormState;
    });
  };
  
  const formInputs = [{
      input: {
        type: 'text',
        name: 'checkout_name'
      },    
      blurchangeHandler: (name) => {      
        return { value:name,
          valid: name.trim().length !== 0
        };
      },    
      label: "Name"
    },
    {
      input: {
        type: 'email',
        name: 'checkout_email',
      },
      label: "Email",
      inputsValidity: allInputsValidity
    }, 
    {
      input: {
        type: 'text',
        name: 'checkout_street',
      },
      label: "Street"
    },
    {
      input: {
        type: 'text',
        name: 'checkout_city',
      },
      label: "city"
    },
    {
      input: {
        type: 'text',
        name: 'checkout_zipcode',
      },
      label: "Zip Code"
    }
  ];
  

  const sumbitHandler = event => {
    console.log(isFormInputValid);
    event.preventDefault();
    console.log('order');
  };

  return (
      <div>
        <form onSubmit = {sumbitHandler}>
          {formInputs.map(input => (
              <CheckoutInput 
                  key = {input.input.name}
                  {...input}
                  onFormInput = {formInputHandler} />
            ))
          }
          <Button button = {
              { 
                className: 'btn btn-white'
              }
            }
            >Close</Button>
        </form>
      </div>
      );
};

export default CheckoutForm;