import React, {useEffect, useState} from "react";
import {cart, clearCart } from "./cart";
import { currency } from "home/products";

export default function MiniCart(){
    const [items,setItems] = useState(undefined);
    const [showCart, shetShowCart] = useState(false);

    useEffect(() => {
        setItems(cart.value?.cartItems);
        return cart.subscribe((c) => {
            setItems(c?.cartItems);
        });
    },[]);

    if(!items) return null;

    return (
        <>

        </>
    )
}