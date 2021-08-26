import { useState, useEffect } from 'react';
import Card from '../UI/Card';
import MealsListItem from './MealsListItem';
import DUMMY_LIST from './MealsDummyList';

const FETCH_URL = 'https://react-food-app-e5bb3-default-rtdb.firebaseio.com/meals.json';

const MealsList = () => {
  const [loadedMeals, setLoadedMeals] = useState(DUMMY_LIST);
  useEffect(() => {    
    const fetchMeals = async () => {
      try {
        const response = await fetch(FETCH_URL);
        if (!response.ok) {
          throw Error(response.statusText);
        }       
        const responseData = await response.json();        
        const mealsList = [];
        
        for (let key in responseData) {
          mealsList.push({
            id: key,
            name: responseData[key].name,
            description: responseData[key].description,
            price: responseData[key].price,
            img: `/assets/img/${responseData[key].img}`
          });
        }
        setLoadedMeals(mealsList);
      } catch (error) {        
      }
    };
    fetchMeals();
  }, []);

  const list = loadedMeals.map(item => 
            <MealsListItem {...item} key = {item.id} />
            );
  return (
    <Card className = "card-light meals-list">
      <ul>
        {list}
      </ul>
    </Card>
  );
};

export default MealsList;