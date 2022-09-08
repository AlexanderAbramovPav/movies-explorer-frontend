import React, { useState, useEffect } from 'react';
import AccountHeader from '../AccountHeader/AccountHeader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer'
import FindMoreBtn from '../FindMoreBtn/FindMoreBtn';

function SavedMovies(props) {

    return (
        <section className='saved-movies'>
            <AccountHeader routeLinks={props.routeLinks}/>
            <main className='saved-movies__main'>
                <SearchForm />
                <MoviesCardList isProfile={true}/>
                <FindMoreBtn isProfile={true}/>
            </main>
            <Footer />
        </section>
    );
}

export default SavedMovies;