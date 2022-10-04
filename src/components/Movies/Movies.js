import React from 'react';
import AccountHeader from '../AccountHeader/AccountHeader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer'
import FindMoreBtn from '../FindMoreBtn/FindMoreBtn';
import Preloader from '../Preloader/Preloader';
import Greetings from '../Greetings/Greetings'

function Movies(props) {

    return (
        <section className='movies'>
            <AccountHeader routeLinks={props.routeLinks}/>
            <main className='movies__main'>
                <SearchForm 
                    onSearch={props.onSearch}
                    searchValue={props.searchValue}
                    switchValue={props.switchValue} 
                    isProfile={false}
                />
                {!props.isLoading ?
                    <>
                        <MoviesCardList 
                            isProfile={false} 
                            userCards={props.userCards} 
                            onSave={props.onSave}
                            userSavedMovies={props.userSavedMovies}
                        />
                        {!props.isMoreLoading ? 
                            <>
                                {!props.isMoreMoviesExists ? "" : <FindMoreBtn onMore={props.onMore}/>} 
                            </>
                        : <Preloader />
                        }
                    </> 
                : <Preloader />
                }
                {!props.isEmptyList ? "" : <Greetings text={'Nothing found'}/>}
            </main>  
            <Footer />
        </section>
    );
}

export default Movies;