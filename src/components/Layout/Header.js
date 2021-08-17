import CartButton from "./CartButton"

const Header = props => {
  return (
    <header className = "header">
      <nav id = "nav-head">
        <div className = "header-content">
          <h1>React Food App</h1>
          <CartButton onClick = {props.onShowCart} />
        </div>
      </nav>
    </header>
  );
};

export default Header;