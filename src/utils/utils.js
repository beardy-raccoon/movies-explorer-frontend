import { shortMovieDuration } from "./consts";

const movieOptimazer = (movies) => {
  movies.forEach(movie => {
    if (!movie.image) {
      movie.image = 'https://brainshef.ru/storage/app/uploads/public/59d/a1e/073/59da1e073ac05570557046.jpg';
      movie.thumbnail = 'https://brainshef.ru/storage/app/uploads/public/59d/a1e/073/59da1e073ac05570557046.jpg';
    } else {
      movie.thumbnail = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`
      movie.image = `https://api.nomoreparties.co${movie.image.url}`
    }
    if (!movie.country) {
      movie.country = 'Unknown';
    }
    if (!movie.nameEN) {
      movie.nameEN = movie.nameRU;
    }
  });
  return movies
};

function setShortMovies(movies) {
  return movies.filter(movie => movie.duration < shortMovieDuration);
};

const filterMovies = (movies, searchQuery, shortMovie) => {
  const searchQueryRes = movies.filter((movie) => {
    const movieRu = String(movie.nameRU).toLowerCase().trim();
    const movieEn = String(movie.nameEN).toLowerCase().trim();
    const userMovie = searchQuery.toLowerCase().trim();
    return movieRu.indexOf(userMovie) !== -1 || movieEn.indexOf(userMovie) !== -1;
  });

  if (shortMovie) {
    return setShortMovies(searchQueryRes);
  } else {
    return searchQueryRes;
  }
};

const toHours = (time) => {
  if (time >= 60) {
    const minutes = time % 60
    return `${Math.floor(time / 60)}ч ${minutes > 0 ? minutes + "м" : ""}`
  } else {
    return `${time}м`
  }
};

export {
  movieOptimazer,
  setShortMovies,
  filterMovies,
  toHours
}