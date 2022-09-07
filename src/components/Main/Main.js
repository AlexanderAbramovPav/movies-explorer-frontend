import React, { useState, useEffect } from 'react';
import Promo from '../Promo/Promo'
import AboutProject from '../AboutProject/AboutProject'
import Techs from '../Techs/Techs'
import AboutMe from '../AboutMe/AboutMe'
import Portfolio from '../Portfolio/Portfolio'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Main(props) {

    return (
        <>
            < Header props={props}/>
            < Promo />
            < AboutProject />
            < Techs />
            < AboutMe />
            < Portfolio />
            < Footer />
        </>

    );
}

export default Main;
