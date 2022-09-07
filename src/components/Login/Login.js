import React, { useState, useEffect } from 'react';
import Logo from '../Logo/Logo'
import Greetings from '../Greetings/Greetings'
import SignInput from '../SignInput/SignInput'
import SignSubmitBtn from '../SignSubmitBtn/SignSubmitBtn'
import SignInfo from '../SignInfo/SignInfo'

function Login(props) {

    return (
        <section className='login'>
            <Logo />
            <Greetings text={'Рады видеть!'}/>
            <form className='login__form-container' onSubmit={props.onSubmitSign}>
                <SignInput name={'E-mail'} type={'email'} err={"Некорректный Email"} isError={true} />
                <SignInput name={'Пароль'} type={'password'} err={"Некорректный пароль"} isError={false}/>
                <SignSubmitBtn text={'Войти'}/>
                <SignInfo text={'Ещё не зарегистрированы?'} actBtn={'Регистрация'} onSignChange={props.onSignChange} />
            </form>
        </section>
    );
}

export default Login;
