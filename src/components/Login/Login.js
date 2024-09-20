import React, { useState, useEffect } from 'react';
import Logo from '../Logo/Logo'
import Greetings from '../Greetings/Greetings'
import SignInput from '../SignInput/SignInput'
import SignSubmitBtn from '../SignSubmitBtn/SignSubmitBtn'
import SignInfo from '../SignInfo/SignInfo'
import useForm from '../../hooks/useForm';

function Login(props) {

    const useFormData = useForm()

    function handleSubmit(e) {
      e.preventDefault()
      props.onLogin(useFormData);
      useFormData.setValues({
        email: null,
        password: null
      })
    }

    // Form handler
    const [isFormError, setIsFormError] = useState(true);

    useEffect(() => {
      if ((useFormData.values?.email !== undefined && useFormData.values?.password !== undefined) &&  useFormData.values?.email && useFormData.values?.password) {
        setIsFormError(false)
      } else {
        setIsFormError(true)
      }
    }, [useFormData])

    return (
        <section className='login'>
            <Logo />
            <Greetings text={'Good to see you!'}/>
            <form className='login__form-container' onSubmit={handleSubmit}>
                <SignInput text={'E-mail'} type={'email'} name={'email'} onChange={useFormData.handleChange} data={useFormData.values?.email}/>
                <SignInput text={'Password'} type={'password'} name={'password'} onChange={useFormData.handleChange} data={useFormData.values?.password}/>
                <SignSubmitBtn text={'Log In'} isError={isFormError}/>
                <SignInfo text={'Not registered yet?'} actBtn={'Register'} onSignChange={props.onSignChange} />
            </form>
        </section>
    );
}

export default Login;
