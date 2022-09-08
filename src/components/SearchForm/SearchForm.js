import React, { useState, useEffect } from 'react';
import FindIcon from '../../images/find-icon.svg'
import SearchIcon from '../../images/search-icon.svg'

function SearchForm() {

    return (
        <>
            <form className='searcher'>
                <div className='searcher__container'>
                    <img className='searcher__search-icon' src={SearchIcon} alt='Иконка лупы'/>
                    <input className='searcher__input-movie' placeholder="Фильм" type='text' required/>
                    <button className='searcher__submit-btn' aria-label="Подтвердить действие" type="submit" name="submit-button"><img src={FindIcon} alt='Иконка поиска'/></button>
                </div>
                <div className='searcher__switch-container'>
                    <label className="searcher__switch">
                        <input className="searcher__input-checkbox" type="checkbox" />
                        <span className="searcher__slider"></span>
                    </label>
                    <p className="searcher__switch-text">Короткометражки</p>
                </div>
            </form>
            <hr className="searcher__line"/>
        </>

    );
}

export default SearchForm;