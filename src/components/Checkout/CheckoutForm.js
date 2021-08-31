import CheckoutInput from './CheckoutInput';
import Button from '../UI/Button';
import CartContext from '../../store/cart-context';
import { useState, useContext } from 'react';

const allInputsValidity = {
  checkout_name: '', 
  checkout_email: '',
  checkout_street: '',
  checkout_city: '',
  checkout_zipcode: ''
};

const CheckoutForm = props => {
  const cartDetails = useContext(CartContext);

  // state for every input value validation - for form
  const [isFormInputValid, setIsFormInputValid] = useState(allInputsValidity);
  
  const formInputHandler = (inputName, inputValue, inputValidity) => {
    setIsFormInputValid(prevState => {
      const newFormState = {...prevState};
      newFormState[inputName] = {
        value: inputValue,
        isValid: inputValidity
      };
      return newFormState;
    });
  };
  
  const formInputs = [{
      input: {
        type: 'text',
        name: 'checkout_name'
      },
      blurchangeHandler: (name) => {      
        return { value: name.trim(),
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
        return { value: email.trim(),
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
        return { value: street.trim(),
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
        return { value: city.trim(),
          valid: city.trim().length !== 0
        };
      },
      label: "City",
      errorMessage: "Please enter a valid city."
    },
    {
      input: {
        type: 'text',
        name: 'checkout_zipcode',
      },
      blurchangeHandler: (zipcode) => {      
        return { value: zipcode.trim(),
          valid: zipcode.trim().length < 6 && zipcode.trim().length > 0
        };
      },
      label: "Zip Code",
      errorMessage: "Please enter a valid zip code."
    }
  ];
  

  const sumbitHandler = event => {    
    event.preventDefault();
    const formInputs = Object.entries(isFormInputValid);
    // to find for invalid input
    const formIValid = formInputs.find(eachInput => !eachInput[1].isValid);
    
    if (formIValid) { // if invlaid found - return without submitting the order
      return;
    }

    // collect customer information to make order to submit
    const customerDetails = formInputs.reduce((details, eachInput) =>{
      details[eachInput[0]] = eachInput[1].value;
      return details;
    }, {});

    const orderDetails = {
      customer_details: customerDetails,
      item_details: cartDetails.items   // get cart items from cart context
    };
     
    props.onConfirm(orderDetails);    
  };

  return (
      <div className = "checkout-form">
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
            >Order</Button>
        </form>
      </div>
      );
};

export default CheckoutForm;