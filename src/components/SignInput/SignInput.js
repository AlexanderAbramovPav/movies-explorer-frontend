import React from 'react';

function SignInput(props) {

    // Переменные состояния ошибки
    const isErrorMod = props.isError && "error"
    const isVisible = !props.isError && "hidden"

    return (
        <>
            <div className='sign-input'>
                <p className='sign-input__nm'>{props.text}</p>
                <input 
                    name={props.name}
                    type={props.type} 
                    required
                    minLength="2"
                    className={`sign-input__input-nm ${isErrorMod}`}
                    onChange={props.onChange}
                    value={props.data || ""}
                    ></input>
            <p className={`sign-input__err ${isVisible}`}>{props.err}</p>
            </div>
        </>
    );
}

export default SignInput;
