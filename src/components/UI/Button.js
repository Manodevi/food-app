const Button = props => {
  return <button 
            title = {props.children}
            {...props.button}>{props.children}</button>
};

export default Button;