import React, { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import {Link} from 'react-router-dom';

function AccountHeader(props) {

    return (
        <header className='account-header'>
            <Logo />
            <div className="account-header__navbar-container">
                <input className='account-header__input' type="checkbox" />
                <div className="account-header__overlay"></div>
                <div className="account-header__hamburger-lines">
                    <span className="account-header__line account-header__line_first"></span>
                    <span className="account-header__line account-header__line_second"></span>
                    <span className="account-header__line account-header__line_third"></span>
                </div>
                <ul className="account-header__burger-items">
                    <li className='account-header__burger-item'><p className='account-header__burger-title'>Главная</p></li>
                    <li className='account-header__burger-item'><Link className='account-header__burger-link account-header__burger-link_chosen' to={props.routeLinks.movies}>Фильмы</Link></li>
                    <li className='account-header__burger-item'><Link className='account-header__burger-link' to={props.routeLinks.savedMovies}>Сохранённые фильмы</Link></li>
                    <li className='account-header__burger-item'><Link className='account-header__text' to={props.routeLinks.profile}>Аккаунт</Link></li>
                </ul>
            </div>
            <div className='account-header__full-navi'>
                <div className='account-header__links-container'>
                    <Link className='account-header__movies-btn' to={props.routeLinks.movies}>Фильмы</Link>
                    <Link className='account-header__saved-movies-btn' to={props.routeLinks.savedMovies}>Сохранённые фильмы</Link>  
                </div>
                <Link className='account-header__text' to={props.routeLinks.profile}>Аккаунт</Link>
            </div>
        </header>
    );
}

export default AccountHeader;
