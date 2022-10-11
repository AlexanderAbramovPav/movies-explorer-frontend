import React, { useState, useEffect } from 'react';
import '../InfoTooltip/InfoTooltip.css'
import SignInput from '../SignInput/SignInput';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import useForm from '../../hooks/useForm';
import { useTypedSelector } from "../../hooks/useTypedSelector.ts";
import { EMAIL_REG_EXP, NAME_REG_EXP } from '../../utils/constants'


function EditAccountInfoForm(props) {

    //Redux state management
    const currentUser = useTypedSelector(state => state.currentUser);

    if (currentUser.error) {
      console.log(currentUser.error)
    }

    const useFormData = useForm()

    // Form handler
    const [isNameError, setIsNameError] = useState(true);
    const [isEmailError, setIsEmailError] = useState(true);
    const [isFormError, setIsFormError] = useState(true);

    useEffect(() => {
      if (useFormData.values?.name === undefined) {
        setIsNameError(false);
      }
      else if (!NAME_REG_EXP.test(useFormData.values?.name)) {
        setIsNameError(true);
      } else {setIsNameError(false)}

      if (useFormData.values?.email === currentUser?.email && useFormData.values?.name === currentUser?.name) {
        setIsFormError(true);
      } else setIsFormError(false)

    }, [useFormData.values?.name])

    useEffect(() => {
      if (useFormData.values?.email === undefined) {
        setIsEmailError(false);
      }
      else if (!EMAIL_REG_EXP.test(useFormData.values?.email)) {
        setIsEmailError(true);
      } else {
        setIsEmailError(false);
      }

      if (useFormData.values?.email === currentUser?.email && useFormData.values?.name === currentUser?.name) {
        setIsFormError(true); 
      } else setIsFormError(false)

    }, [useFormData.values?.email])

    useEffect(() => {
      if ((!isNameError && !isEmailError) && useFormData.values?.name && useFormData?.values.email) {
        setIsFormError(false)
      } else {
        setIsFormError(true)
      }

      if (useFormData.values?.email === currentUser?.email && useFormData.values?.name === currentUser?.name) {
        setIsFormError(true);
      }

    }, [isNameError, isEmailError])


    // Popup Window Handler
    useEffect(() => {
      props.isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll'
      useFormData.setValues({
        name: currentUser?.name,
        email: currentUser?.email
      })
      setIsFormError(true);
    }, [props.isOpen]);

    // Submit handler
    function handleSubmit(e) {
      e.preventDefault()
      props.onUpdateUser(useFormData);
    }

    return (
      !useFormData ? "" :
      <InfoTooltip onClose={props.onClose} isOpen={props.isOpen} onOutClick={props.onOutClick}>
        <h2 className="edit-form__title">{props.title}</h2>
          <form className="edit-form__form" name={`form_${props.name}`} onSubmit={handleSubmit} >

            <SignInput text={'Name'} name={'name'} type={'string'} err={"Must be a string with 2+ symbols and no spaces"} isError={isNameError} onChange={useFormData.handleChange} data={useFormData.values?.name}/>

            <SignInput text={'E-mail'} name={'email'} type={'email'} err={"Incorrect Email"} isError={isEmailError} onChange={useFormData.handleChange} data={useFormData.values?.email}/>

            <button className={isFormError ? `edit-form__submit-btn edit-form__submit-btn_disabled` : `edit-form__submit-btn`} aria-label="Submit" disabled={isFormError} type="submit" name="submit-button">{props.submit}</button>
          </form>
      </InfoTooltip>
    );
  }
  
  export default EditAccountInfoForm;