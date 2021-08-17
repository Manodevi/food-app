import Header from './components/Layout/Header';
import AppInfo from './components/Meals/AppInfo';
import MealsList from './components/Meals/MealsList';
import CartProvider from './store/CartProvider';
import Modal from './components/Layout/Modal';
import { useState } from 'react';

function App() {    
  // State for showing CartModal
  const [cartIsShown, setCartIsShown] = useState(false);

  const cartShowHandler = () => {
    setCartIsShown(true);
  };

  const cartHideHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Modal onHideCart = {cartHideHandler} />}
      <Header onShowCart = {cartShowHandler} />
      <main className = "main-content">
        <AppInfo />
        <MealsList />
      </main>
    </CartProvider>
  );
}

export default App;
