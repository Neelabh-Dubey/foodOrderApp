import { useReducer } from "react";
import cartContext from "./cartContext";

import menu from "../assets/MenuMeal";


const cartInitializer = {
    items: new Map(),
    totalQty: 0,
    totalAmt: 0,
};

const cartReducer = (state, action) => {
    let itemsMap = new Map(state.items);
    let totalAmt = state.totalAmt;
    let totalQty = state.totalQty;
    const id = action.id;
    const item = menu.get(id);
    const newItem = {
        name: item.name,
        price: item.price,
        qty: itemsMap.has(id) ? itemsMap.get(id).qty : 1
    }

    switch(action.type){
        case 'UPDATE':
            newItem.qty += 1;
            itemsMap.set(id, newItem);
            totalQty =  state.totalQty + 1;
            totalAmt = state.totalAmt + menu.get(id).price;
            break;
        case 'ADD':
            itemsMap.set(id, newItem);
            totalQty =  state.totalQty + 1;
            totalAmt = state.totalAmt + menu.get(id).price;
            break;
        case 'REMOVE':
            itemsMap.delete(id);
            totalQty =  state.totalQty - 1;
            totalAmt = state.totalAmt - menu.get(id).price;
            break;
        case 'REDUCE':
            newItem.qty -= 1;
            itemsMap.set(id, newItem);
            totalQty =  state.totalQty - 1;
            totalAmt = state.totalAmt - menu.get(id).price;
            break;
        default:
            return cartInitializer;
    }

    return {
        items: itemsMap,
        totalQty: totalQty,
        totalAmt: totalAmt
    };
}



function CartContextProvider(props){

    const[cart, cartDispatcher] = useReducer(cartReducer, cartInitializer);

    const addItemHandler = (id) => {
        if(cart.items.has(id)){
            cartDispatcher({
                type: 'UPDATE',
                id: id
            });
        }
        else{
            cartDispatcher({
                type: 'ADD',
                id: id
            });
        }
    }

    const removeItemHandler = (id) => {
        if(cart.items.has(id)){
            if(cart.items.get(id).qty===1){
                cartDispatcher({
                    type: 'REMOVE',
                    id: id
                });
            }
            else{
                cartDispatcher({
                    type: 'REDUCE',
                    id: id
                });
            }
        }
    }

    const cartRep = {
        items: cart.items,
        totalQty: cart.totalQty,
        totalAmt: cart.totalAmt,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }


    return(
        <cartContext.Provider value={cartRep}>
            {props.children}
        </cartContext.Provider>
    );
}

export default CartContextProvider;