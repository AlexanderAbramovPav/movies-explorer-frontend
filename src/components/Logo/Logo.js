import React from 'react';
import LogoIcon from '../../images/logo.svg';
import {Link} from 'react-router-dom';

function Logo() {

    return (
        <Link className='logo' to={'/'}><img className='logo__img' src={LogoIcon} alt='Логотип сайта'/></Link>
    );
}

export default Logo;
