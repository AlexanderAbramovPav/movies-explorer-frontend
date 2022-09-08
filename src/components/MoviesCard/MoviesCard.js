import React, { useState, useEffect } from 'react';
import SaveIcon from '../../images/save-icon.svg'
import SavedIcon from '../../images/saved-icon.svg'
import UnSaveIcon from '../../images/unsave-icon.svg'

function MoviesCard(props) {

    // Временные Переменные для демонстрации верстки
    const Icon = (props) => {
        if (props.isSaved & props.isProfile) {
            return UnSaveIcon
        } else if (props.isSaved) {
            return SavedIcon
        } else {
            return SaveIcon
        }
    }

    return (
        <div className='movie-card'>
            <div className='movie-card__container'>
                <h2 className='movie-card__title'>{props.title}</h2>
                <p className='movie-card__length'>{props.length}</p>
                <button className='movie-card__save-btn' type='button'><img className='movie-card__save-icon' src={Icon(props)} alt='Кнопка сохранения фильма'/></button>
            </div>
            <img className='movie-card__img' src={props.img} alt='Кнопка сохранения фильма'/>
        </div>
    );
}

export default MoviesCard;