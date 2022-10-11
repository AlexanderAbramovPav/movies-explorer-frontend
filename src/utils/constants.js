  // Constants LS
  export const LOCAL_STORAGE_ITEMS = {
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
  export const ROUTES = {
    profile: '/profile', 
    movies: '/movies', 
    savedMovies: '/saved-movies',
    signin: '/signin',
    signup: '/signup',
    main: '/',
    youtube: "https://www.youtube.com",
  }

  // Reg exps
  export const URL_REG_EXP = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  export const EMAIL_REG_EXP = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  export const NAME_REG_EXP = /^[a-zA-Zа-яА-ЯёЁ]{2,}$/;
  export const PASSWORD_REG_EXP = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,}$/;

  //TipTittles
  export const TIP_TITTLES = {
    SUCCESS_REG: "You have successfully registered!", 
    SUCCESS_UPD: "Profile has been successfully updated", 
    ERROR_GEN: "Something went wrong! Try again.",
    ERROR_SEARCH: "You need to enter a keyword",
    ERROR_SERVER: "An error occurred during the request. There may be a connection problem or the server is unavailable. Wait a bit and try again", 

  }