import React, { useState, useEffect } from 'react';
import { CurrentUserContext} from '../../context/CurrentUserContext';
import { Route, Routes, Navigate, useNavigate, useLocation} from 'react-router-dom';
import ProtectedRoutes from '../ProtectedRoutes/ProtectedRoutes.js';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Error404 from '../Error404/Error404';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import EditAccountInfoForm from '../EditAccountInfoForm/EditAccountInfoForm';
import PopupInfo from '../PopupInfo/PopupInfo';
import errorIcon from '../../images/icon-error.svg';
import okIcon from '../../images/icon-ok.svg';

import { getMovies } from '../../utils/MoviesApi.js'
import * as api from '../../utils/MainApi.js';


import './App.css';

function App() {

  let navigate = useNavigate();

  // Constants LS
  const localStorageItems = {
    allFoundMovies: 'allFoundMovies', 
    foundFilms: 'foundFilms',
    searchFilter: 'searchFilter', 
    isShort: 'isShort',
    savedFoundFilms: 'savedFoundFilms',
    savedSearchFilter: 'savedSearchFilter',
    savedIsShort: 'savedIsShort',
    isLogged: 'isLogged',
  }

  // Constants routes
  const routes = {
    profile: '/profile', 
    movies: '/movies', 
    savedMovies: '/saved-movies',
    signin: '/signin',
    signup: '/signup',
    main: '/'
  }

  // Constants user state
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Constants Search
  const [userCards, setUserCards] = useState(null);
  const [foundMovies, setFoundMovies] = useState(JSON.parse(localStorage.getItem(localStorageItems.foundFilms)));
  const [allFoundMovies, setAllFoundMovies] = useState(JSON.parse(localStorage.getItem(localStorageItems.allFoundMovies)));
  const [searchInputValue, setSearchInputValue] = useState(localStorage.getItem(localStorageItems.searchFilter) || "");
  const [searchSwitchValue, setSearchSwitchValue] = useState(localStorage.getItem(localStorageItems.isShort) || "");
  
  // Constants Search results
  const [isEmptyList, setIsEmptyList] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  const [isMoreMoviesExists, setIsMoreMoviesExists] = useState(false);

  // Constants Search results in Saved
  const [isEmptySavedList, setIsEmptySavedList] = useState(false);
  const [userSavedMovies, setUserSavedMovies] = useState(null);
  const [savedFoundMovies, setSavedFoundMovies] = useState(JSON.parse(localStorage.getItem(localStorageItems.savedFoundFilms)));
  const [searchSavedInputValue, setSearchSavedInputValue] = useState(localStorage.getItem(localStorageItems.savedSearchFilter || ""));
  const [searchSavedSwitchValue, setSearchSavedSwitchValue] = useState(localStorage.getItem(localStorageItems.savedIsShort) || "");

  // Constants popups
  const [selectedTooltip, setSelectedTooltip] = useState(null);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);

  // Close popups
  function closeAllPopups() {
    setIsEditPopupOpen(false);
    setIsInfoTooltipOpen(false);
    setTimeout(() => {
      setSelectedTooltip(null);
    }, 200);
  };

  // Closing popups with espape
  const isOpen = isEditPopupOpen || isInfoTooltipOpen

  useEffect(() => {
      if (!isOpen) return;
        const closeByEscape = (e) => {
          if (e.key === 'Escape') {
            closeAllPopups();
          }
        }
        document.addEventListener('keydown', closeByEscape)
        return () => document.removeEventListener('keydown', closeByEscape)
    }, [isOpen])

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      closeAllPopups();
    }
  }

  // Tooltips
  function handleSignSubmitPopup(selectedTooltip) {
    setSelectedTooltip(selectedTooltip);
    setTimeout(() => {setIsInfoTooltipOpen(true)}, 500)
  };

  // Register
  function handleRegister(useFormData) {
    console.log(useFormData.values.password);
    api.register(useFormData.values.password, useFormData.values.email, useFormData.values.name)
    .then((res) => {
      if (res) {
          handleSignSubmitPopup({
            icon: okIcon, 
            tipTitle: "You have successfully registered!"
          });
          setTimeout(() => {handleLogin(useFormData)}, 1000)
        }
    })
    .catch((err) => {
      console.log(err)
      handleSignSubmitPopup({
        icon: errorIcon,
        tipTitle: "Something went wrong! Try again."
      })
    });
  }

   
  // Log In
  function handleLogin (useFormData) {
    api.authorize(useFormData.values.password, useFormData.values.email)
    .then((res) => {
      if (res) {
          setLoggedIn({
            loggedIn: true,
            email: useFormData.values.email,
            name: useFormData.values.name,
          })
          localStorage.setItem(localStorageItems.isLogged, 'true')
          navigate(routes.movies);

          setTimeout(() => {
            localStorage.removeItem(localStorageItems.isLogged);
          }, 3600000)
        }
    })
    .catch((err) => {
      console.log(err)
      handleSignSubmitPopup({
        icon: errorIcon,
        tipTitle: "Something went wrong! Try again."
      })
    });
  }


  // Get info while login
  useEffect(() => {
    if (loggedIn) {
      Promise.all([api.getUserInfo(), api.getInitialMovies()])
      .then(([currentUser, savedMovies]) => {
        setCurrentUser(currentUser);
        setUserSavedMovies(savedMovies);
      })
      .catch((err) =>
        console.log(`${err}`))
    } else {
    }
  }, [loggedIn]);

  // Clear LS info
  function deleteLocalStorageInfo() {
    localStorage.removeItem(localStorageItems.foundFilms);
    localStorage.removeItem(localStorageItems.allFoundMovies);
    localStorage.removeItem(localStorageItems.searchFilter);
    localStorage.removeItem(localStorageItems.isShort);
    localStorage.removeItem(localStorageItems.savedFoundFilms);
    localStorage.removeItem(localStorageItems.savedSearchFilter);
    localStorage.removeItem(localStorageItems.savedIsShort);
  }

  // Checktoken after reload
  function handleGetContent() {
    if (localStorage.getItem(localStorageItems.isLogged)) {
      api.checkToken()
      .then((res) => {
        if (res) {
          setLoggedIn({
            loggedIn: true
          })
        }
      })
      .catch((err) => {
        console.log(err)
        localStorage.removeItem(localStorageItems.isLogged);
        deleteLocalStorageInfo()
        }
      );
    } else {
      deleteLocalStorageInfo()
    }
  }

  // Get content
  useEffect(() => {
    handleGetContent(); 
  }, []);


  // Update personal info
  function handleEditUserClick() {
    setIsEditPopupOpen(true);
  };

  function handleUpdateUser(data) {
    api.patchUserInfo(data.values)
    .then((updateInfo) => {
      setCurrentUser(updateInfo);
      setIsEditPopupOpen(false);
      handleSignSubmitPopup({
        icon: okIcon, 
        tipTitle: "Profile has been successfully updated"
      });
    })
    .catch((err) => {
        console.log(err);
        handleSignSubmitPopup({
          icon: errorIcon,
          tipTitle: "An error occurred during the request. There may be a connection problem or the server is unavailable. Wait a bit and try again"
        })
    });
  };


  // Log out
  function signOut() {
    localStorage.removeItem(localStorageItems.isLogged);
    deleteLocalStorageInfo()

    setLoggedIn({
      loggedIn: false
    })

    api.logout()
    .then(() => navigate(routes.main))
  }


  // Search filter
  const filterMovies = (movies, filterWord, isShort) => {
    const filteredData = movies.filter((el) => {
      if (isShort && el.duration > 40) {
        return false;
      }
      if ((filterWord === '') || (filterWord === null)) {
          return el;
      } else {
          return el.nameEN.toLowerCase().includes(filterWord)
      }
    })

    return filteredData;
  }

  // Get cards based on width
  const getCardsByWidth = () => {
    const windowWidth = window.innerWidth;
    let foundFirstMovies = []
    let foundFirstMoviesMaxLength

    if (windowWidth < 768) {
      foundFirstMovies = foundMovies.slice(0, 5);
      foundFirstMoviesMaxLength = 5;
    } else if (windowWidth < 1280) {
      foundFirstMovies = foundMovies.slice(0, 8);
      foundFirstMoviesMaxLength = 8;
    } else {
      foundFirstMovies = foundMovies.slice(0, 12);
      foundFirstMoviesMaxLength = 8;
    }

    if (foundMovies.length <= foundFirstMoviesMaxLength) {
      setIsMoreMoviesExists(false);
    } else {
      setIsMoreMoviesExists(true);
    }

    if (foundFirstMovies.length < 1) {
      setIsEmptyList(true);
    }

    setUserCards(foundFirstMovies)
  }
  
  // Get card on search
  const handleMovieSearchClick = async (searchFilter, isShort) => {

    try {

      if (searchFilter === undefined || searchFilter === "" || searchFilter === null || searchFilter < 1) {

        handleSignSubmitPopup({
          icon: errorIcon,
          tipTitle: "You need to enter a keyword"
        })

      } else if (allFoundMovies) {
          setIsEmptyList(false);
          setIsLoading(true)
          setFoundMovies(null);
          setUserCards(null);

          const foundFilteredMovies = filterMovies(allFoundMovies, searchFilter, isShort);
          setFoundMovies(foundFilteredMovies);

          localStorage.setItem(localStorageItems.foundFilms, JSON.stringify(foundFilteredMovies));
          localStorage.setItem(localStorageItems.searchFilter, searchFilter);
          localStorage.setItem(localStorageItems.isShort, isShort);
          setSearchInputValue(searchFilter);
          setSearchSwitchValue(isShort);

        } else {
          setIsEmptyList(false);
          setIsLoading(true)
          setFoundMovies(null);
          setUserCards(null);

          const foundMovies = await getMovies();
          setAllFoundMovies(foundMovies);
          const foundFilteredMovies = filterMovies(foundMovies, searchFilter, isShort);
          setFoundMovies(foundFilteredMovies);

          localStorage.setItem(localStorageItems.foundFilms, JSON.stringify(foundFilteredMovies));
          localStorage.setItem(localStorageItems.searchFilter, searchFilter);
          localStorage.setItem(localStorageItems.isShort, isShort);
          setSearchInputValue(searchFilter);
          setSearchSwitchValue(isShort);
        }

    } catch (err) {
      console.log(err);
      handleSignSubmitPopup({
        icon: errorIcon,
        tipTitle: "An error occurred during the request. There may be a connection problem or the server is unavailable. Wait a bit and try again"
      })
      setIsLoading(false)
    }
  }

  // When receiving films, we receive cards
  useEffect(() => {
    if (allFoundMovies) {
      localStorage.setItem(localStorageItems.allFoundMovies, JSON.stringify(allFoundMovies));
    }
  }, [allFoundMovies])

  useEffect(() => {
    if (foundMovies) {
      getCardsByWidth()
      setIsLoading(false);
    }
  }, [foundMovies])


  // Get an additional number of cards based on the width of the screen
  const getMoreCardsByWidth = () => {
    const windowWidth = window.innerWidth;
    const userCardsLength = userCards.length;
    let additionalMovies = [];

    if (windowWidth < 1280) {
      additionalMovies = foundMovies.slice(userCardsLength, userCardsLength + 2);
    } else {
      additionalMovies = foundMovies.slice(userCardsLength, userCardsLength + 3);
    }

    setUserCards([...userCards, ...additionalMovies]);
    if (additionalMovies < 1) {
      setIsMoreMoviesExists(false);
    }
    setIsMoreLoading(false);
  }

  // At the end of the movies, remove the More button
  useEffect(() => {
    if (userCards && userCards.length === foundMovies.length) {
      setIsMoreMoviesExists(false);
    }
  }, [userCards])
  

  // Обработка нажатия кнопки Ещё
  const handleMoreClick = ()=> {
    setIsMoreLoading(true);
    setTimeout(() => {getMoreCardsByWidth()}, 1000);
  }


  // Adding/removing cards to saved in Movies
  function handleMovieSave(movie) {

    const urlRegExp = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

    if (!urlRegExp.test(movie.trailerLink)) {
      movie.trailerLink = "https://www.youtube.com"
    }

    console.log()

    const isLiked = userSavedMovies.some(i => i.movieId === movie.id);
    const savedCard = userSavedMovies.find(i => i.movieId === movie.id);

    api.changeLikeCardStatus(savedCard?._id, isLiked, movie)
    .then((newMovie) => {
      if (isLiked) {
        setUserSavedMovies((state) => state.filter((m) => m.movieId !== movie.id))

        if (localStorageItems.savedFoundFilms > 0) {
          const foundSavedMoviesLS = JSON.parse(localStorage.getItem(localStorageItems.savedFoundFilms));
          const changedFoundMovies = foundSavedMoviesLS.filter((m) => m.movieId !== movie.movieId);
          setSavedFoundMovies(changedFoundMovies)
          localStorage.setItem(localStorageItems.savedFoundFilms, JSON.stringify(changedFoundMovies));
        }
        
      } else {
        setUserSavedMovies([newMovie, ...userSavedMovies]);
      }
    })
    .catch((err) => {
        console.log(err);
        handleSignSubmitPopup({
          icon: errorIcon,
          tipTitle: "An error occurred during the request. There may be a connection problem or the server is unavailable. Wait a bit and try again"
        })
    });
  } 


  // Deleting saved cards from SavedMovies
  function handleSavedMoviesDeleteClick(movie) {

    api.changeLikeCardStatus(movie._id, true, movie)
    .then(() => {

      setUserSavedMovies((state) => state.filter((m) => m.movieId !== movie.movieId))

      if (localStorageItems.savedFoundFilms > 0) {
        const foundSavedMoviesLS = JSON.parse(localStorage.getItem(localStorageItems.savedFoundFilms));
        const changedFoundMovies = foundSavedMoviesLS.filter((m) => m.movieId !== movie.movieId);
        setSavedFoundMovies(changedFoundMovies)
        localStorage.setItem(localStorageItems.savedFoundFilms, JSON.stringify(changedFoundMovies));
      }
      
    })
    .catch((err) => {
        console.log(err);
        handleSignSubmitPopup({
          icon: errorIcon,
          tipTitle: "An error occurred during the request. There may be a connection problem or the server is unavailable. Wait a bit and try again"
        })
    });
  }


  // Search in the Saved cards section
  const handleSavedMovieSearchClick = (searchFilter, isShort) => {

    try {
        setIsEmptySavedList(false);
        setIsLoading(true)
        setSavedFoundMovies(null);

        
        const foundFilteredMovies = filterMovies(userSavedMovies, searchFilter, isShort);
        setSavedFoundMovies(foundFilteredMovies);

        if (foundFilteredMovies < 1) {
          setIsEmptySavedList(true);
        }

        localStorage.setItem(localStorageItems.savedFoundFilms, JSON.stringify(foundFilteredMovies));
        localStorage.setItem(localStorageItems.savedSearchFilter, searchFilter);
        localStorage.setItem(localStorageItems.savedIsShort, isShort);

        setSearchSavedInputValue(searchFilter);
        setSearchSavedSwitchValue(isShort);

      } catch (err) {
      console.log(err);
      handleSignSubmitPopup({
        icon: errorIcon,
        tipTitle: "An error occurred during the request. There may be a connection problem or the server is unavailable. Wait a bit and try again"
      })
      setIsLoading(false)
    }
  }

  // When filtering, we check for the presence of a movie
  useEffect(() => {
    if (savedFoundMovies) {
      setIsLoading(false);
    } else {
      setIsEmptySavedList(true);
      setIsLoading(false);
    }
  }, [savedFoundMovies])


  // When restarting, we get the status of the saved search result
  useEffect(() => {
    if (JSON.parse(localStorage.getItem(localStorageItems.savedFoundFilms)) === null)
    {
      setIsEmptySavedList(false);
    } else if (JSON.parse(localStorage.getItem(localStorageItems.savedFoundFilms)) < 1) {
      setIsEmptySavedList(true)
    } else {
      setIsEmptySavedList(false)
    }
  }, []);


  // Select the list of saved cards based on the filter and deletion
  const getMoviesList = () => {
    if (localStorage.getItem(localStorageItems.savedSearchFilter) === null & localStorage.getItem(localStorageItems.savedIsShort) === null) 
    {
      return userSavedMovies
    } else if ((
      (localStorage.getItem(localStorageItems.savedSearchFilter) === "") || (localStorage.getItem(localStorageItems.savedSearchFilter) === null)
      ) & localStorage.getItem(localStorageItems.savedIsShort) === 'false') {
      return userSavedMovies
    } else {
      return savedFoundMovies
    }
      
  }
  const moviesList = getMoviesList();

  return (
    
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path={routes.main} element={
          <Main 
            onLogin={routes.signin} 
            onRegister={routes.signup}
            isLogged={localStorage.getItem(localStorageItems.isLogged)}
            routeLinks={routes}
            />} 
          />
        <Route path={routes.signup} element={
          <Register 
            onSignChange={routes.signin} 
            onRegister={handleRegister}
          />} 
        />
        <Route path={routes.signin} element={
          <Login 
            onSignChange={routes.signup} 
            onLogin={handleLogin}
          />} 
        />
                
        <Route path="*" element={<Error404 />} />

        <Route element={<ProtectedRoutes loggedIn={localStorage.getItem(localStorageItems.isLogged)}/>}>
          
          <Route path={routes.profile} element={
            localStorage.getItem(localStorageItems.isLogged) ?
            (<Profile 
              routeLinks={routes} 
              onLogout={signOut} 
              onUpdateUserClick={handleEditUserClick}
            />) : (<Navigate replace to={routes.main} />)}
          />

          <Route path={routes.movies} element={
            localStorage.getItem(localStorageItems.isLogged) ?
            (<Movies 
              routeLinks={routes} 
              userCards={userCards} 
              onSearch={handleMovieSearchClick} 
              onMore={handleMoreClick} 
              isLoading={isLoading} 
              isMoreLoading={isMoreLoading} 
              isMoreMoviesExists={isMoreMoviesExists} 
              isEmptyList={isEmptyList} 
              onSave={handleMovieSave}
              searchValue={searchInputValue}
              switchValue={searchSwitchValue}
              userSavedMovies={userSavedMovies}
            />) : (<Navigate replace to={routes.main} />)}
          /> 

          <Route path={routes.savedMovies} element={
            localStorage.getItem(localStorageItems.isLogged) ?
            (<SavedMovies 
              routeLinks={routes} 
              userCards={moviesList}
              onSearch={handleSavedMovieSearchClick} 
              onSave={handleSavedMoviesDeleteClick}
              isLoading={isLoading} 
              isEmptyList={isEmptySavedList}
              searchValue={searchSavedInputValue}
              switchValue={searchSavedSwitchValue}
            />) : (<Navigate replace to={routes.main} />)} 
          />

        </Route>

      </Routes>

      <EditAccountInfoForm 
        isOpen={isEditPopupOpen} 
        onClose={closeAllPopups} 
        onUpdateUser={handleUpdateUser} 
        onOutClick={handleOverlay} 
        name="edit-profile" 
        title="Edit profile" 
        submit="Edit"
      />

      <PopupInfo 
        onClose={closeAllPopups} 
        isOpen={isInfoTooltipOpen} 
        selectedTooltip={selectedTooltip} 
        onOutClick={handleOverlay}
      />

    </CurrentUserContext.Provider>  
  );
}

export default App;
