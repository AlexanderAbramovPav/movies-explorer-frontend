import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import DescText from '../DescText/DescText';

function AboutProject() {

    return (
        <section className='project' id='project'>
            <SectionTitle text="About the project"/>
            <div className='project__info-containers'>
                <div className='project__container'>
                    <h2 className='project__header'>The project included 5 stages</h2>
                    <DescText text='Drawing up a plan, working on the backend, layout, adding functionality and final improvements.'/>
                </div>
                <div className='project__container'>
                    <h2 className='project__header'>The project took 3 weeks to complete</h2>
                    <DescText text='The deadline were formed taking into account its comfortable combination with the main job'/>
                </div>
            </div>
            <div className='project__times-container'>
                <div className='project__time-container'>
                    <p className='project__done'>1 week</p>
                    <p className='project__time-desc'>Back-end</p>
                </div>
                <div className='project__time-container'>
                    <p className='project__todo'>2 weeks</p>
                    <p className='project__time-desc'>Front-end</p>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;
