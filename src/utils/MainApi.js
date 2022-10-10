class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(res.status);
    }
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
      credentials: "include",
    })
      .then(this._getResponse);
  }

  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      credentials: "include",
    })
      .then(this._getResponse);
  }

  editProfile(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        email
      }),
      credentials: "include",
    })
      .then(this._getResponse);
  }

  addMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image,
        trailerLink: data.trailerLink,
        thumbnail: data.thumbnail,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
      credentials: "include",
    })
      .then(this._getResponse);
  }

  deleteMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: "include",
    })
      .then(this._getResponse);
  }
}

export const mainApi = new Api({
  baseUrl: 'https://api.raccoondiploma.nomoredomains.sbs',
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  }
});

