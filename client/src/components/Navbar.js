import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
    <div className='Navbar'>
        <a href='/'>Home</a>
        <a href='/calendar'>Calendar</a>
        <a href='/stats'>Stats</a>
        <a href='/login'>Login</a>

    </div>

    );
}

export default Navbar;