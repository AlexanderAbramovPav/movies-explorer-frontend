import {BASE_MOVIES_URL} from './MoviesApi.js'

export const BASE_URL = 'https://movies-explorer-api-iota.vercel.app';

export const getServerStatus = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
}

export const register = (password, email, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({password, email, name})
  })
  .then((response) => {
    return getServerStatus(response)
  })
  .then (data => data)
};


export const authorize = (password, email) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({password, email})
    })
    .then((response => {
        return getServerStatus(response)
      }))
    .then (data => data)
  }; 


export const checkToken = () => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        credentials: 'include',
    })
    .then(response => {
      return getServerStatus(response)
      })
    .then(data => data)
}

export const logout = () => {
  return fetch(`${BASE_URL}/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      credentials: 'include',
    })
    .then(response => {
        return getServerStatus(response)
        })
    .then(data => data)
}

export const getUserInfo = () => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include'
    })
    .then(response => {
        return getServerStatus(response)
        })
    .then(data => data)
}

export const patchUserInfo = (bodyOptions) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(bodyOptions)
    })
        .then(response => {
            return getServerStatus(response)
        })
        .then(data => data)
}

export const getInitialMovies = () => {
    return fetch(`${BASE_URL}/movies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
    },
      credentials: 'include'
    })
    .then(response => {
        return getServerStatus(response)
    })
    .then(data => data)
}

export const changeLikeCardStatus = (movieId, isLiked, bodyOptions) => {
    if (isLiked) {
        return fetch(`${BASE_URL}/movies/${movieId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
          })
            .then(response => {
                return getServerStatus(response)
            })
            .then(data => data)
    }
 
    else {
        return fetch(`${BASE_URL}/movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                movieId: bodyOptions.id,
                nameRU: bodyOptions.nameRU,
                nameEN: bodyOptions.nameEN,
                image: `${BASE_MOVIES_URL}${bodyOptions.image.url}`,
                trailerLink: bodyOptions.trailerLink,
                duration: bodyOptions.duration,
                country: bodyOptions.country,
                director: bodyOptions.director,
                year: bodyOptions.year,
                description: bodyOptions.description,
                thumbnail: `${BASE_MOVIES_URL}${bodyOptions.image.url}`,
              }),
        })
        .then(response => {
            return getServerStatus(response)
        })
        .then(data => data)
    }     
}
