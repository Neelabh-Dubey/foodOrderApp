import {useState, useContext} from "react";

import ViewCart from "./ViewCart";
import cartContext from '../../store/cartContext';


import styles from './Cart.module.css';

function Cart(){

    const cartCntx = useContext(cartContext);
    const totalQuantity = cartCntx.totalQty;

    const [cartState, setCartState] = useState(false);

    function onCartHandler(){
        setCartState(prev => !prev);
    }
    return (
        <>
            {cartState && <ViewCart onCartHandler={onCartHandler}/>}
            <button className={styles.cartBtn} onClick={onCartHandler}>
                <span className={styles.cartName}>Cart</span> 
                <span className={styles.cartItems}>{totalQuantity}</span>
            </button>
        </>
    );
}

export default Cart;