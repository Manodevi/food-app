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
        return { value: name,
          valid: name.trim().length !== 0
        };
      },
      label: "Name",
      errorMessage: "Please enter a valid name."
    },
    {
      input: {
        type: 'text',
        name: 'checkout_email',
      },
      blurchangeHandler: (email) => {      
        return { value: email,
          valid: email.includes('@')
        };
      },
      label: "Email",
      errorMessage: "Please enter a valid email."
    }, 
    {
      input: {
        type: 'text',
        name: 'checkout_street',
      },
      blurchangeHandler: (street) => {      
        return { value: street,
          valid: street.trim().length !== 0
        };
      },
      label: "Street",
      errorMessage: "Please enter a valid street."
    },
    {
      input: {
        type: 'text',
        name: 'checkout_city',
      },
      blurchangeHandler: (city) => {      
        return { value: city,
          valid: city.trim().length !== 0
        };
      },
      label: "city",
      errorMessage: "Please enter a valid city."
    },
    {
      input: {
        type: 'text',
        name: 'checkout_zipcode',
      },
      blurchangeHandler: (zipcode) => {      
        return { value: zipcode,
          valid: zipcode.trim().length < 6 && zipcode.trim().length > 0
        };
      },
      label: "Zip Code",
      errorMessage: "Please enter a valid zip code."
    }
  ];
  

  const sumbitHandler = event => {    
    event.preventDefault();
    for(let inputValid in isFormInputValid) {
      if(!isFormInputValid[inputValid]) {        
        return;
      }
    }

    console.log('Submission');
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