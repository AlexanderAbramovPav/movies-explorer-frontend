import React, { useState, useEffect } from 'react';
import Logo from '../Logo/Logo'
import Greetings from '../Greetings/Greetings'
import SignInput from '../SignInput/SignInput'
import SignSubmitBtn from '../SignSubmitBtn/SignSubmitBtn'
import SignInfo from '../SignInfo/SignInfo'

function Register(props) {

    return (
        <section className='register'>
            <Logo />
            <Greetings text={'Добро пожаловать!'}/>
            <form className='register__form-container' onSubmit={props.onSubmitSign}>
                <SignInput name={'Имя'} type={'string'} err={"Некорректное имя"} isError={false} />
                <SignInput name={'E-mail'} type={'email'} err={"Некорректный Email"} isError={false} />
                <SignInput name={'Пароль'} type={'password'} err={"Некорректный пароль"} isError={true}/>
                <SignSubmitBtn text={'Зарегистрироваться'}/>
                <SignInfo text={'Уже зарегистрированы?'} actBtn={'Войти'} onSignChange={props.onSignChange} />
            </form>
        </section>
    );
}

export default Register;
