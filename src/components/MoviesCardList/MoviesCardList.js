import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList(props) {

    return (
        <>
            {props.isProfile ?
                <>
                    <section className='movies-list'>
                    {props.userCards?.map((item) => (
                        <MoviesCard 
                            key={item._id} 
                            item={item} 
                            onSave={props.onSave} 
                            isProfile={props.isProfile}
                        />
                            ))}
                    </section>
                </> 
                :
                <>
                    <section className='movies-list'>
                    {props.userCards?.map((item) => (
                        <MoviesCard 
                            key={item.id} 
                            item={item} 
                            userSavedMovies={props.userSavedMovies} 
                            onSave={props.onSave} 
                            isProfile={props.isProfile}
                        />
                        ))}
                    </section>
                </>
            }
        </>
    );
}

export default MoviesCardList;