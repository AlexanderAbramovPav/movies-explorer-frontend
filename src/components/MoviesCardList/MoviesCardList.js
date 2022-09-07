import React, { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList(props) {

    // ForEach будет реализован на следующем этапе
    return (
        <section className='movies-list'>
            <MoviesCard title={'33 слова о дизайне'} length={'1ч 47м'} img={'https://img.csfd.cz/files/images/film/photos/161/271/161271954_68519a.jpg?w370h370'} isSaved={true} isProfile={props.isProfile}/>
            <MoviesCard title={'33 слова о дизайне'} length={'1ч 47м'} img={'https://img.csfd.cz/files/images/film/photos/161/271/161271954_68519a.jpg?w370h370'} isSaved={true} isProfile={props.isProfile}/>
            <MoviesCard title={'33 слова о дизайне'} length={'1ч 47м'} img={'https://img.csfd.cz/files/images/film/photos/161/271/161271954_68519a.jpg?w370h370'} isSaved={true} isProfile={props.isProfile}/>
        </section>
    );
}

export default MoviesCardList;