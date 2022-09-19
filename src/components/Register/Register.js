import React, { useState, useEffect } from 'react';
import Logo from '../Logo/Logo'
import Greetings from '../Greetings/Greetings'
import SignInput from '../SignInput/SignInput'
import SignSubmitBtn from '../SignSubmitBtn/SignSubmitBtn'
import SignInfo from '../SignInfo/SignInfo'
import useForm from '../../hooks/useForm';

function Register(props) {

    const useFormData = useForm()

    // Обработчик формы
    const [isNameError, setIsNameError] = useState(false);
    const [isEmailError, setIsEmailError] = useState(false);
    const [isPasswordError, setIsPasswordError] = useState(false);
    const [isFormError, setIsFormError] = useState(true);

    const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordRegExp = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,}$/;
    const nameRegExp = /^[a-zA-Zа-яА-ЯёЁ]{2,}$/;

    useEffect(() => {
      if (useFormData.values?.name === undefined) {
        setIsNameError(false);
      }
      else if (!nameRegExp.test(useFormData.values?.name)) {
        setIsNameError(true);
      } else {setIsNameError(false)}
    }, [useFormData.values?.name])

    useEffect(() => {
      if (useFormData.values?.email === undefined) {
        setIsEmailError(false);
      }
      else if (!emailRegExp.test(useFormData.values?.email)) {
        setIsEmailError(true);
      } else {setIsEmailError(false)}
    }, [useFormData.values?.email])

    useEffect(() => {
      if (useFormData.values?.password === undefined) {
        setIsPasswordError(false);
      }
      else if (!passwordRegExp.test(useFormData.values?.password)) {
        setIsPasswordError(true);
      } else {setIsPasswordError(false)}
    }, [useFormData.values?.password])


    useEffect(() => {
      if ((!isNameError && !isEmailError & !isPasswordError) && useFormData.values?.name && useFormData?.values.email && useFormData?.values.password) {
        setIsFormError(false)
      } else {
        setIsFormError(true)
      }
    }, [isNameError, isEmailError, isPasswordError])



    function handleSubmit(e) {
      e.preventDefault()
      props.onRegister(useFormData);
      useFormData.setValues({
        name:'',
        email: '',
        password: ''
      })
    }

    return (
        <section className='register'>
            <Logo />
            <Greetings text={'Добро пожаловать!'}/>
            <form className='register__form-container' onSubmit={handleSubmit}>
                <SignInput text={'Имя'} name={'name'} type={'string'} err={"Имя должно быть строкой больше 2 символов"} isError={isNameError} onChange={useFormData.handleChange} data={useFormData.values?.name}/>

                <SignInput text={'E-mail'} name={'email'} type={'email'} err={"Некорректный Email"} isError={isEmailError} onChange={useFormData.handleChange} data={useFormData.values?.email}/>

                <SignInput text={'Пароль'} name={'password'} type={'password'} err={"От 8 символов с хотя бы одной заглавной и цифрой"} isError={isPasswordError} onChange={useFormData.handleChange} data={useFormData.values?.password}/>

                <SignSubmitBtn text={'Зарегистрироваться'} isError={isFormError}/>
                <SignInfo text={'Уже зарегистрированы?'} actBtn={'Войти'} onSignChange={props.onSignChange}/>
            </form>
        </section>
    );
}

export default Register;
