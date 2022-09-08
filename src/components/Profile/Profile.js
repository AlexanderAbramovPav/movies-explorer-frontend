import React, { useState, useEffect } from 'react';
import AccountHeader from '../AccountHeader/AccountHeader';
import Greetings from '../Greetings/Greetings';
import {Link} from 'react-router-dom';

function Profile(props) {

    return (
        <section className='profile'>
            <AccountHeader routeLinks={props.routeLinks}/>
            <main className='profile__main'>
                <Greetings text='Привет, Виталий!'/>
                <ul className='profile__container'>
                    <li className='profile__list-item'>
                        <p className='profile__key'>Имя</p>
                        <p className='profile__value'>Виталий</p>
                    </li>
                    <li className='profile__list-item'>
                        <p className='profile__key'>E-mail</p>
                        <p className='profile__value'>pochta@yandex.ru</p>
                    </li>
                </ul>
                <Link className='profile__edit-btn' to={""}>Редактировать</Link>
                <Link className='profile__logout-btn' to={""}>Выйти из аккаунта</Link>
            </main>
        </section>
    );
}

export default Profile;