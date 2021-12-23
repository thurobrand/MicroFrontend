import React, { useState, useEffect } from "react";
import {login, jwt} from "./cart";
import Login from "./login";
import MiniCart from "./MiniCart";
export default function CartContent() {
const [token, setToken] = useState("");

useEffect(() =>{
    return jwt.subscribe((val) => setToken(val ?? ""));
},[]
)
return <div>
        <div></div>JWT: {token}
        <Login/>
        <MiniCart/>
        </div>
 }