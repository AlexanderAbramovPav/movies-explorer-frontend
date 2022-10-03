import React from 'react';
import {useNavigate} from 'react-router-dom';

function Error404() {

    const navigate = useNavigate();

    return (
        <section className="errorNotFound">
            <h1 className="errorNotFound__number">404</h1>
            <p className="errorNotFound__error-desc">Страница не найдена</p>
            <button className="errorNotFound__back-btn" type='button' onClick={() => navigate(-1)}>Назад</button>
        </section>
    );
}

export default Error404;
