import Card from '../UI/Card';
import MealsListItem from './MealsListItem';

const DUMMY_LIST = [
  {
    id: 'meals_1',
    name: 'Sushi',
    description: 'Lorem ipsum dolor sit amet',
    price: 23,
    img: '/assets/img/Cheese_Lover_Beef.jpg'
  },
  {
    id: 'meals_2',
    name: 'Shawarma',
    description: 'Lorem ipsum sdsd sit amet',
    price: 45.50,
    img: '/assets/img/Cheese_Lover_Beef.jpg'
  },
  {
    id: 'meals_4',
    name: 'Briyani',
    description: 'Lorem dolor sit amet',
    price: 25.90,
    img: '/assets/img/Cheese_Lover_Beef.jpg'
  },
  {
    id: 'meals_5',
    name: 'Mac Soup',
    description: 'Lorem ipsum dolor sit amet',
    price: 12.99,
    img: '/assets/img/Cheese_Lover_Beef.jpg'
  },
  {
    id: 'meals_6',
    name: 'Veg Roll',
    description: 'Lorem ipsum dolor sit amet',
    price: 10,
    img: '/assets/img/Cheese_Lover_Beef.jpg'
  },
];
const MealsList = () => {
  const list = DUMMY_LIST.map(item => 
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