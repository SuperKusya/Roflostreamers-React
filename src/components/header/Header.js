import React from "react";
import './_Header.scss';

import Logo from '../logo/Logo';
import Button from '../button/Button';

function Header() {
    return (
        <div className='header'>
            <Logo />
            <Button />
        </div>
    )
}

export default Header;