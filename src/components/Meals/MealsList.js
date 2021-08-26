import Card from '../UI/Card';
import MealsListItem from './MealsListItem';
import DUMMY_LIST from './MealsDummyList';

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