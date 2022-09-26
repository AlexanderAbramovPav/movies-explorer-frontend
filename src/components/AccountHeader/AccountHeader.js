import React, { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import { Link, useLocation } from 'react-router-dom';

function AccountHeader(props) {

    const [isChecked, setIsChecked] = useState(false)
    const width = window.innerWidth;

    let location = useLocation().pathname
    
    const isMovies = (location) => {
        if (location === "/movies") {
            return 'movies'
        } else if (location === "/saved-movies") {
            return 'saved-movies'
        } else if (location === "/") {
            return 'main'
        } else return ''
    }

    useEffect(() => {
        isMovies(location)
    }, [location])
    


    useEffect(() => {

        // Анимация бургера исходя из ширины экрана + прячем бургер
        const width = window.innerWidth;

        if (isChecked) {
            document.body.style.overflowY = 'hidden';
            document.body.style.overflowX = 'hidden';
            document.body.querySelector('.account-header__burger-items').style.display = 'flex'
            width >= 768 ? document.body.querySelector('.account-header__burger-items').style.transform = 'translateX(45%)' : document.body.querySelector('.account-header__burger-items').style.transform = 'translateX(0%)'
        } else {
            document.body.style.overflowY = 'auto';
            document.body.style.overflowX = 'hidden';
            document.body.querySelector('.account-header__burger-items').style.display = 'none'
            width >= 768 ? document.body.querySelector('.account-header__burger-items').style.transform = 'translateX(145%)' : document.body.querySelector('.account-header__burger-items').style.transform = 'translateX(100%)';
        }
    }, [width, isChecked]);


    return (
        <header className='account-header'>
            <Logo />
            <div className='account-header__burger-container'>
            <input className='account-header__input' type="checkbox" defaultChecked={isChecked} onChange={() => setIsChecked(!isChecked)}/>
            <div className="account-header__hamburger-lines">
                    <span className="account-header__line account-header__line_first"></span>
                    <span className="account-header__line account-header__line_second"></span>
                    <span className="account-header__line account-header__line_third"></span>
                </div>
            <div className="account-header__overlay"></div>
            </div>
            


            <div className="account-header__navbar-container">
                <ul className="account-header__burger-items">
                <li className='account-header__burger-item'><Link className={isMovies(location) === 'main' ? `account-header__burger-link account-header__burger-link_chosen` : `account-header__burger-link`} to={props.routeLinks.main}>Главная</Link></li>
                    <li className='account-header__burger-item'><Link className={isMovies(location) === 'movies' ? `account-header__burger-link account-header__burger-link_chosen` : `account-header__burger-link`} to={props.routeLinks.movies}>Фильмы</Link></li>
                    <li className='account-header__burger-item'><Link className={isMovies(location) === 'saved-movies' ? `account-header__burger-link account-header__burger-link_chosen` : `account-header__burger-link`} to={props.routeLinks.savedMovies}>Сохранённые фильмы</Link></li>
                    <li className='account-header__burger-item'><Link className='account-header__text' to={props.routeLinks.profile}>Аккаунт</Link></li>
                </ul>
            </div>
            <div className='account-header__full-navi'>
                <div className='account-header__links-container'>
                    <Link className={isMovies(location) === 'movies' ? `account-header__movies-btn account-header__movies-btn_chosen` : `account-header__movies-btn`} to={props.routeLinks.movies}>Фильмы</Link>
                    <Link className={isMovies(location) === 'saved-movies' ? `account-header__movies-btn account-header__movies-btn_chosen` : `account-header__movies-btn`} to={props.routeLinks.savedMovies}>Сохранённые фильмы</Link>  
                </div>
                <Link className='account-header__text' to={props.routeLinks.profile}>Аккаунт</Link>
            </div>
        </header>
    );
}

export default AccountHeader;
