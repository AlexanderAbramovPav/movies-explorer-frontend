import React, { useState, useEffect } from 'react';
import '../InfoTooltip/InfoTooltip.css'
import SignInput from '../SignInput/SignInput';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

function EditAccountInfoForm(props) {
    return (
      <InfoTooltip onClose={""} isOpen={props.isOpen} onOutClick={""}>
        <h2 className="edit-form__title">{props.title}</h2>
          <form className="edit-form__form" name={`form_${props.name}`} onSubmit={props.onSubmit} >
              <SignInput name={'E-mail'} type={'email'} err={"Некорректный Email"} isError={true} />
              <SignInput name={'Пароль'} type={'password'} err={"Некорректный пароль"} isError={false}/>
            <button className="edit-form__submit-btn" aria-label="Подтвердить действие" type="submit" name="submit-button">{props.submit}</button>
          </form>
      </InfoTooltip>
    );
  }
  
  export default EditAccountInfoForm;