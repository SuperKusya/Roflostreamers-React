import React from 'react';
import logo from '../../assets/images/logo.png'
import './_Logo.scss';

function Logo() {
    return(
        <a href='./' className='logo-link'>
            <img src={logo} className='logo'></img>
        </a>
    )
}

export default Logo;