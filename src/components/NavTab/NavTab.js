import React from 'react';

function NavTab() {

    return (
        <ul className='navtab'>
            <li className='navtab__item'><a className='navtab__item-link' href="#project">Project</a></li>
            <li className='navtab__item'><a className='navtab__item-link' href="#techs">Techs</a></li>
            <li className='navtab__item'><a className='navtab__item-link' href="#about-me">Developer</a></li>
        </ul>
    );
}

export default NavTab;
