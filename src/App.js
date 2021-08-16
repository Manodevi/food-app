import { Fragment } from 'react';
import Header from './components/Layout/Header';
import AppInfo from './components/Meals/AppInfo';
import MealsList from './components/Meals/MealsList';

function App() {
  return (
    <Fragment>
      <Header />
      <main className = "main-content">
        <AppInfo />
        <MealsList />
      </main>
    </Fragment>
  );
}

export default App;
