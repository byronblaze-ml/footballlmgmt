import React, { useEffect, useState } from "react";
import './Navbar.css';
import { Redirect, useHistory } from "react-router-dom";


function Navbar() {
    const [loggedIn, setLoggedIn] = useState(false);
    let history = useHistory();


    useEffect(() => {
        console.log(localStorage.getItem("loggedIn"));
        setLoggedIn(localStorage.getItem("loggedIn"));
        console.log(loggedIn);
    }, [localStorage.getItem("loggedIn")]);
    

    return (
        
    <div className='Navbar'>
        <a href='/home'>Home</a>
        {loggedIn ? (
            <>
                <a href='/search'>Search</a>
                <a href='/stats'>Stats</a>
                <a href='/manage'>Manage</a>
                <a href='/'>Logout</a>
                
            </>
        ) : (
            <>
            <a href='/login'>Login</a>
            </>
            )}
    </div>

    );
}

export default Navbar;