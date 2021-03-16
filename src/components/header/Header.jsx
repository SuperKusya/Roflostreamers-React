import React from "react";
import './style.scss';

import Logo from '../logo/Logo';
import Login from '../login/Login';

function Header() {
    return (
        <div className='header'>
            <Logo />
            <Login />
        </div>
    )
}

export default Header;