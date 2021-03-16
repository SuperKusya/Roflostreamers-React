import React, { useState } from 'react';
import './style.scss';

import Button from 'components/button/Button';
import Menu from 'components/menu/Menu';


function Login() {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    // const [styleMenu, setStyleMenu] = useState();
    const styleMenu = {
        position: 'relative',
        display: 'none',
    }

    const onSubmit = () => {
        if(isMenuOpened == false) {
            setIsMenuOpened(true);
            styleMenu.position = 'absolute';
            styleMenu.display = 'block';
        }
    }

    return(
        <div className='login'>
            <Button onClick={onSubmit}/>
            <Menu style={styleMenu}/>
        </div>
    )
}

export default Login;