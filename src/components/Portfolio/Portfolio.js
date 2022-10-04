import React from 'react';
import LinkIcon from "../../images/link-icon.svg"

function Portfolio() {

    return (
        <section className='portfolio'>            
            <h2 className='portfolio__title'>Portflio of pet-projects</h2>
            <ul className='portfolio__site-list'>
                <li className='portfolio__site-item'>
                    <a className='portfolio__site-link' href='https://github.com/AlexanderAbramovPav/react-mesto-api-full' target="_blank" rel='noreferrer'>
                        <p className='portfolio__site-name'>Single Page Application</p>
                        <img src={LinkIcon} className='portfolio__site-icon' alt="Link"/>
                    </a>
                </li>
                <li className='portfolio__site-item'>
                    <a className='portfolio__site-link' href='https://github.com/AlexanderAbramovPav/travel-guide-adaptive-lending' target="_blank" rel='noreferrer'>
                        <p className='portfolio__site-name'>Adaptive lending</p>
                        <img src={LinkIcon} className='portfolio__site-icon' alt="Link"/>
                    </a>
                </li>
                <li className='portfolio__site-item'>
                    <a className='portfolio__site-link' href='https://github.com/AlexanderAbramovPav/how-to-learn-lending-guide' target="_blank" rel='noreferrer'>
                        <p className='portfolio__site-name'>Static lending</p>
                        <img src={LinkIcon} className='portfolio__site-icon' alt="Link"/>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;
