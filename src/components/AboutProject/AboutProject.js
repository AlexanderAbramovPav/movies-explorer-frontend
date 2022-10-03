import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import DescText from '../DescText/DescText';

function AboutProject() {

    return (
        <section className='project' id='project'>
            <SectionTitle text="О проекте"/>
            <div className='project__info-containers'>
                <div className='project__container'>
                    <h2 className='project__header'>Дипломный проект включал 5 этапов</h2>
                    <DescText text='Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.'/>
                </div>
                <div className='project__container'>
                    <h2 className='project__header'>На выполнение диплома ушло 5 недель</h2>
                    <DescText text='У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.'/>
                </div>
            </div>
            <div className='project__times-container'>
                <div className='project__time-container'>
                    <p className='project__done'>1 неделя</p>
                    <p className='project__time-desc'>Back-end</p>
                </div>
                <div className='project__time-container'>
                    <p className='project__todo'>4 недели</p>
                    <p className='project__time-desc'>Front-end</p>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;
