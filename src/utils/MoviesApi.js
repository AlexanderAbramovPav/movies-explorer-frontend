export const BASE_MOVIES_URL = 'https://api.nomoreparties.co';

export const getServerStatus = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
}

export const getMovies = () => {
  return fetch(`${BASE_MOVIES_URL}/beatfilm-movies`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify()
  })
  .then((response) => {
    return getServerStatus(response)
  })
  .then (data => data)
};
