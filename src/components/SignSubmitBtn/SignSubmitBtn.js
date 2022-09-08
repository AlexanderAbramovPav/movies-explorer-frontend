import React, { useState, useEffect } from 'react';

function SignSubmitBtn(props) {

    return (
        <button type='submit' className='sign-submit-btn' aria-label="Подтвердить действие">{props.text}</button>
    );
}

export default SignSubmitBtn;
