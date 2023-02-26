import MenuMeal from '../../assets/MenuMeal'
import Meal from './Meal';
import Card from '../UI/Card';

function MealList(){
    const menu = [];
    MenuMeal.forEach((meal,key) => {
        menu.push(<div key={key}>
            <Meal id={key} item={meal} />
            <hr/>
        </div>);
    });
    
    return (
        <Card>
            {menu}
        </Card>
    );
}

export default MealList;