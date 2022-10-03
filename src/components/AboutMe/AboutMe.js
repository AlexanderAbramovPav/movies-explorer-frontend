import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import DescText from '../DescText/DescText';
import Avatar from '../../images/pers_photo.svg'

function AboutMe() {

    return (
        <section className='about-me' id='about-me'>
            <SectionTitle text="Студент"/>
            <div className='about-me__container'>
                <img className='about-me__avatar' src={Avatar} alt='Фото автора'/>
                <div className='about-me__desc-container'>
                    <h2 className='about-me__name'>Виталий</h2>
                    <h3 className='about-me__desc-short'>Фронтенд-разработчик, 30 лет</h3>
                    <DescText text="Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы." style={{maxWidth: "600px"}}/>
                    <ul className='about-me__social-list'>
                        <li className='about-me__social-item'><a className="about-me__social-link" href="https://www.facebook.com/" target="_blank" rel='noreferrer'>Facebook</a></li>
                        <li className='about-me__social-item'><a className="about-me__social-link" href="https://github.com/" target="_blank" rel='noreferrer'>Github</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
