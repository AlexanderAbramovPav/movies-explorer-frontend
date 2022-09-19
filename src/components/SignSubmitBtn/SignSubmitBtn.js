import React from 'react';

function SignSubmitBtn(props) {

    return (
        <button type='submit' className={props.isError ? `sign-submit-btn sign-submit-btn_disabled` : `sign-submit-btn`} aria-label="Подтвердить действие" disabled={props.isError}>{props.text}</button>
    );
}

export default SignSubmitBtn;
