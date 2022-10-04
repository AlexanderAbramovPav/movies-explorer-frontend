import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import DescText from '../DescText/DescText';

function Techs() {

    return (
        <section className='techs' id='techs'>
            <SectionTitle text="Technologies"/>
            <div className='techs__container'>
                <h2 className='techs__title'>7 technologies</h2>
                <DescText text="The project includes Full-stack MERN development technologies." style={{maxWidth: "460px", marginRight:"auto", marginLeft:"auto"}}/>
                <ul className='techs__list'>
                    <li className='techs__item'>HTML</li>
                    <li className='techs__item'>CSS</li>
                    <li className='techs__item'>JS</li>
                    <li className='techs__item'>React</li>
                    <li className='techs__item'>Git</li>
                    <li className='techs__item'>Express.js</li>
                    <li className='techs__item'>mongoDB</li>
                </ul>
            </div>
        </section>
    );
}

export default Techs;
