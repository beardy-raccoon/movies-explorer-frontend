import './Movies.css';
import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import moviesApi from '../../utils/MoviesApi'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { movieOptimazer, setShortMovies, filterMovies } from '../../utils/utils';

export default function Movies({ isLoggedIn, savedMovies, onMovieLike, onMovieDelete, setIsLoading, setInfoToolTip }) {

  const currentUser = React.useContext(CurrentUserContext);

  const [moviesQuery, setMoviesQuery] = React.useState([]);
  const [isShort, setIsShort] = React.useState(false);
  const [sortedMovies, setSortedMovies] = React.useState([]);
  const [initialMovies, setInitialMovies] = React.useState([]);
  const [isSearchFailed, setIsSearchFailed] = React.useState(false);


  // filter response from main API in local storage by search query(local starage item will be modified according to query)
  const handleSortMovies = (movies, searchQuery, shortMovie) => {
    const moviesList = filterMovies(movies, searchQuery, shortMovie);
    if (moviesList.length === 0) {
      setIsSearchFailed(true);
      setInfoToolTip({ isOpen: true, type: 'error', text: 'ничего не найдено' });
    } else {
      setIsSearchFailed(false);
    }
    setMoviesQuery(moviesList);
    setSortedMovies(shortMovie ? setShortMovies(moviesList) : moviesList);
    localStorage.setItem(`${currentUser._id} - movies`, JSON.stringify(moviesList));
  }

  // request to main API and save response to local storage
  const handleSearchMovie = (movieToFind) => {
    localStorage.setItem(`${currentUser._id} - movieSearch`, movieToFind);
    localStorage.setItem(`${currentUser._id} - shortMovies`, isShort);

    if (initialMovies.length === 0) {
      setIsLoading(true);
      moviesApi.getMovies()
        .then((movies) => {
          setInitialMovies(movies);
          handleSortMovies(movieOptimazer(movies), movieToFind, isShort);
        })
        .catch((err) => {
          setInfoToolTip({ isOpen: true, type: 'error', text: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.' });
          console.log(err);
        })
        .finally(() => setIsLoading(false));
    } else {
      // in case local storage has saved item in there
      handleSortMovies(initialMovies, movieToFind, isShort);
    }
  }

  const handleSetShort = () => {
    setIsShort(!isShort);
    if (!isShort) {
      setSortedMovies(setShortMovies(moviesQuery));
    } else {
      setSortedMovies(moviesQuery);
    }
    localStorage.setItem(`${currentUser._id} - shortMovies`, !isShort);
  }

  React.useEffect(() => {
    if (localStorage.getItem(`${currentUser._id} - shortMovies`) === 'true') {
      setIsShort(true);
    } else {
      setIsShort(false);
    }
  }, [currentUser]);

  React.useEffect(() => {
    if (localStorage.getItem(`${currentUser._id} - movies`)) {
      const movies = JSON.parse(localStorage.getItem(`${currentUser._id} - movies`));
      setMoviesQuery(movies);
      if (localStorage.getItem(`${currentUser._id} - shortMovies`) === 'true') {
        setSortedMovies(setShortMovies(movies));
      } else {
        setSortedMovies(movies);
      }
    }
  }, [currentUser])

  return (
    <>
      <Header authUser={isLoggedIn} />
      {isLoggedIn &&
        <main className="content">
          <h2 className="content__title">Поиск фильмов</h2>
          <SearchForm handleSearch={handleSearchMovie} handleSetShort={handleSetShort} isShort={isShort} />
          {!isSearchFailed &&
            <MoviesCardList
              moviesList={sortedMovies}
              savedMovies={savedMovies}
              onMovieLike={onMovieLike}
              onMovieDelete={onMovieDelete}
              isShort={isShort}
            />
          }
        </main>
      }
      <Footer />
    </>
  );
}