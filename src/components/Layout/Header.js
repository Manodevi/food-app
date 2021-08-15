const Header = () => {
  return (
    <header className = "header">
      <nav id = "nav-head">
        <div className = "header-content">
          <h1>React Food App</h1>
          <button className = "cart-header btn" type = "button">
            <span>Cart</span>
            <span id = "cart-items"></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;