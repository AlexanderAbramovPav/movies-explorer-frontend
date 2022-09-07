import React, { useState, useEffect } from 'react';

function Error404() {

    return (
        <section className="errorNotFound">
            <h1 className="errorNotFound__number">404</h1>
            <p className="errorNotFound__error-desc">Страница не найдена</p>
            <button className="errorNotFound__back-btn">Назад</button>
        </section>
    );
}

export default Error404;
