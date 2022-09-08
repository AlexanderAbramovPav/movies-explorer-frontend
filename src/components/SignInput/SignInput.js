import React, { useState, useEffect } from 'react';

function SignInput(props) {

    const isErrorMod = props.isError && "error"
    const isVisible = !props.isError && "hidden"

    return (
        <>
            <div className='sign-input'>
                <p className='sign-input__nm'>{props.name}</p>
                <input 
                    type={props.type} 
                    required
                    minLength="2"
                    className={`sign-input__input-nm ${isErrorMod}`} ></input>
            <p className={`sign-input__err ${isVisible}`} >{props.err}</p>
            </div>
        </>
    );
}

export default SignInput;
