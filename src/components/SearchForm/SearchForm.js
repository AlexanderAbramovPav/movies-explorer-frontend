import React, { useState } from 'react';
import FindIcon from '../../images/find-icon.svg'
import SearchIcon from '../../images/search-icon.svg'

function SearchForm(props) {
    
    // Defining saved searches
    const switchDefault = () => {
        if (props?.switchValue) {
            return JSON.parse(props?.switchValue)
        } 
        return false
    }

    const [inputText, setInputText] = useState(props?.searchValue);
    const [inputChecked, setInputChecked] = useState(switchDefault);


    // Processing of the radio button input change
    const inputSwitchHandler = async (e) => {
        if (e.target.checked) {
            await setInputChecked(true)
        } else {
            await setInputChecked(false)
        }

        if (inputText || props.isProfile) {
            props.onSearch(inputText, e.target.checked);
        }
    };

    // Processing text input changes
    const inputHandler = (e) => {
        const lowerCaseInput = e.target.value.toLowerCase();
        setInputText(lowerCaseInput);
    };

    // Processing a search click
    const handleSearchClick = (e) => {
        e.preventDefault();
        props.onSearch(inputText, inputChecked); 
    }

    return (
        <>
            <form className='searcher' onSubmit={handleSearchClick}>
                <div className='searcher__container'>
                    <img className='searcher__search-icon' src={SearchIcon} alt='find'/>
                    <input className='searcher__input-movie' placeholder="Movie" type='text' onChange={inputHandler} defaultValue={inputText}/>
                    <button className='searcher__submit-btn' aria-label="submit" type="submit" name="submit-button"><img src={FindIcon} alt='Find icon'/></button>
                </div>
                <div className='searcher__switch-container'>
                    <label className="searcher__switch">
                        <input className="searcher__input-checkbox" type="checkbox" onChange={inputSwitchHandler} checked={inputChecked}/>
                        <span className="searcher__slider"></span>
                    </label>
                    <p className="searcher__switch-text">Short movies</p>
                </div>
            </form>
            <hr className="searcher__line"/>
        </>

    );
}

export default SearchForm;