import {useContext} from "react";
import cartContext from '../../store/cartContext';


import styles from './Meal.module.css';

function Meal(props){

    const cartCntx = useContext(cartContext);

    const quantity = cartCntx.items.has(props.id) ? cartCntx.items.get(props.id).qty : 0;

    function onAddHandler(evt){
        const mealId = Number(evt.target.getAttribute('data-id'));
        cartCntx.addItem(mealId);
    }

    function onReduceHandler(evt){
        const mealId = Number(evt.target.getAttribute('data-id'));
        cartCntx.removeItem(mealId);
    }
    
    return (
        <div className={styles.mealCard}>
            <div>
                <div className={styles.mealName}>{props.item.name}</div>
                <div className={styles.mealDescription}>{props.item.description}</div>
                <div className={styles.mealPrice}>{`$${props.item.price}`}</div>
            </div>
            <div className={styles.mealAdd}>
                <div><span className={styles.qty}>Qty:</span><input type='number' value={quantity} className={styles.mealQty} readOnly={true}/></div>
                <div>
                    <button className={styles.addBtn} onClick={onAddHandler} data-id={props.id}>+</button>
                    <button className={styles.addBtn} onClick={onReduceHandler} data-id={props.id}>-</button>
                </div>
            </div>
        </div>
    );
}

export default Meal;