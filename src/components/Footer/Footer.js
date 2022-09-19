import React from 'react';

function Footer() {

    return (
        <footer className='footer'>
            <p className='footer__desc'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__container'>
                <ul className='footer__social-list'>
                    <li className='footer__social-item'><a className="footer__social-link" href="https://practicum.yandex.ru/" target="_blank" rel='noreferrer'>Яндекс.Практикум</a></li>
                    <li className='footer__social-item'><a className="footer__social-link" href="https://github.com/" target="_blank" rel='noreferrer'>Github</a></li>
                </ul>
                <p className='footer__year'>&copy; 2022</p>
            </div>
        </footer>
    );
}

export default Footer;
