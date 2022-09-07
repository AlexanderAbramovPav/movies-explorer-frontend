import React, { useState, useEffect } from 'react';

function NavTab() {

    return (
        <ul className='navtab'>
            <li className='navtab__item'><a className='navtab__item-link' href="#project">О проекте</a></li>
            <li className='navtab__item'><a className='navtab__item-link' href="#techs">Технологии</a></li>
            <li className='navtab__item'><a className='navtab__item-link' href="#about-me">Студент</a></li>
        </ul>
    );
}

export default NavTab;
