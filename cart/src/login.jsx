import React, {useState} from "react";
import {login, useLoggedIn} from "./cart";

export default function Login() {
    const loggedIn = useLoggedIn();
    const [showLogin, setShowLogin] = useState(false);

    const [username, setUsername] = useState("sally");
    const [password, setPassword] = useState("123");
    if(loggedIn) return null

    return (
        <>
        <span onClick={() => setShowLogin(!showLogin)}>
            <i className="ri-fingerprint-line text-2xl" id="showlogin"></i>
        </span>
        {showLogin && (
            <div
                className="absolute p-5 border-4 border-blue-800 rounded-md w-full bg-white"
                style={{
                    width: 300,
                    top: "2rem",
                    // left: -250"
                }}
                > 
                <input type="text"
                placeholder="User Name"
                value={username}
                onChange={(evt) => setUsername(evt.target.value)}
                className="border text-sm border-gray-400 p-2 rounded-md w-full" 
                />   
                <input type="password"
                value={password}
                onChange={(evt) => setPassword(evt.target.value)}
                className="border text-sm border-gray-400 p-2 rounded-md w-full" 
                /> 
                <button
                  className="bg-green-900 text-white py-2 px-2 rounded-lg w-1/2 mt-4" 
                  onClick={() => login(username, password)}
                  id="loginbtn"
                  >
                      Login
                  </button>    
            </div>    
        )}
        </>
    );
}