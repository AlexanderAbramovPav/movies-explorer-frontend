import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import DescText from '../DescText/DescText';
import Avatar from '../../images/pers_photo.JPG'

function AboutMe() {

    return (
        <section className='about-me' id='about-me'>
            <SectionTitle text="Developer"/>
            <div className='about-me__container'>
                <img className='about-me__avatar' src={Avatar} alt='Author'/>
                <div className='about-me__desc-container'>
                    <h2 className='about-me__name'>Alexander Abramov</h2>
                    <h3 className='about-me__desc-short'>Frontend developer</h3>
                    <DescText text={`
                    👨‍💻 I have 7+ years in Web-development world (as a Frontend developer and as an IT Product Owner)

                    ⭐ I'm very passionate to build customer focused products, especially acting as a Frontend developer

                    🚀 I managed to launch several successful products from scratch and get high marks from users

                    👨‍🎓 My strong sides align in constant studying and practicing new technologies and finding the perfect balance between value for business and development efforts

                    🌱 I'm tea enthusiast and maker of vegan chocolate @santechoco

                    🏃 I'm Obstacle Course Races (OCR) athlete`} style={{maxWidth: "600px", whiteSpace: "pre-line"}}/>
                    <ul className='about-me__social-list'>
                        <li className='about-me__social-item'><a className="about-me__social-link" href="https://www.linkedin.com/in/alexander-abramov-pavlovich/" target="_blank" rel='noreferrer'>LinkedIn</a></li>
                        <li className='about-me__social-item'><a className="about-me__social-link" href="https://github.com/AlexanderAbramovPav/" target="_blank" rel='noreferrer'>Github</a></li>
                        <li className='about-me__social-item'><a className="about-me__social-link" href="https://www.facebook.com/alexander.abramov.pav/" target="_blank" rel='noreferrer'>Facebook</a></li>
                        <li className='about-me__social-item'><a className="about-me__social-link" href="https://www.instagram.com/alex_wibm/" target="_blank" rel='noreferrer'>Instagram</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
