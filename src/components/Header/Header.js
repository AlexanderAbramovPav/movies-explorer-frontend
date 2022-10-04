import React from 'react';
import Logo from '../Logo/Logo'
import {Link} from 'react-router-dom';

function Header(props) {

    return (
        <header className='header'>
            <Logo />
            <div className='header__container'>
                <Link className='header__signup-btn' to={props.props.onRegister}>Register</Link>
                <Link className='header__signin-btn' to={props.props.onLogin}>Log In</Link>
            </div>
        </header>
    );
}

export default Header;
