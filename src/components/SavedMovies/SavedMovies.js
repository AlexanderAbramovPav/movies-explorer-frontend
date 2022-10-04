import React from 'react';
import AccountHeader from '../AccountHeader/AccountHeader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer'
import Preloader from '../Preloader/Preloader';
import Greetings from '../Greetings/Greetings'

function SavedMovies(props) {

    return (
        <section className='saved-movies'>
            <AccountHeader routeLinks={props.routeLinks}/>
            <main className='saved-movies__main'>
                <SearchForm 
                    onSearch={props.onSearch}
                    searchValue={props.searchValue}
                    switchValue={props.switchValue}
                    isProfile={true}
                />
                {!props.isLoading ?
                    <>
                        <MoviesCardList 
                            isProfile={true} 
                            userCards={props.userCards} 
                            onSave={props.onSave} 
                        />
                    </> 
                : <Preloader />
                }
                {!props.movieList ? "" : <Greetings text={'No saved movies'}/>}
                {!props.isEmptyList ? "" : <Greetings text={'Nothing found'}/>}
            </main>
            <Footer />
        </section>
    );
}

export default SavedMovies;