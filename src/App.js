import Header from './components/Layout/Header';
import AppInfo from './components/Meals/AppInfo';
import MealsList from './components/Meals/MealsList';
import CartProvider from './store/CartProvider';

function App() {
  return (
    <CartProvider>
      <Header />
      <main className = "main-content">
        <AppInfo />
        <MealsList />
      </main>
    </CartProvider>
  );
}

export default App;
