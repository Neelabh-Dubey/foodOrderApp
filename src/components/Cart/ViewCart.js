import { useContext } from "react";

import cartContext from "../../store/cartContext";
import OrderedMeal from "./OrderedMeal";
import Button from "../UI/Button";
import ModalOverlay from "../UI/ModalOverlay";

import styles from './ViewCart.module.css';

function ViewCart(props){

    function onOrderHandler(){
        console.log('//To Do');
    }

    const cartCntx = useContext(cartContext);

    const totalAmount = cartCntx.totalAmt;

    const orderMap = cartCntx.items;
    let orderList = [];
    orderMap.forEach((meal, key) => {
        orderList.push(<div key={key}>
            <OrderedMeal id={key} item={meal} />
            <hr/>
        </div>);
    });

    return (
        <ModalOverlay onClick={props.onCartHandler}>
            {orderList}
            <div className={styles.totalAmount}>
                <span className={styles.total}>Total:</span>
                <span className={styles.amt}>${totalAmount}</span>
            </div>
            <div className={styles.cartBtns}>
                <Button onClickHandler={props.onCartHandler}>Cancel</Button>
                <Button onClickHandler={onOrderHandler}>Order</Button>
            </div>
        </ModalOverlay>
    );
}

export default ViewCart;