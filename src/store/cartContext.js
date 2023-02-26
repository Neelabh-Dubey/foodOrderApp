import {createContext} from "react";

const cartContext = createContext({
    items: new Map(),
    totalQty: 0,
    totalAmt: 0,
    addItem: ()=>{},
    removeItem: ()=>{}
});

export default cartContext;