import './SavedMovies.css';
import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { setShortMovies, filterMovies } from '../../utils/utils';

export default function SavedMovies({ isLoggedIn, savedMovies, onMovieDelete, setInfoToolTip}) {

  const currentUser = React.useContext(CurrentUserContext);

  const [isShort, setIsShort] = React.useState(false);
  const [moviesToShow, setMoviesToShow] = React.useState(savedMovies);
  const [sortedMovies, setSortedMovies] = React.useState(moviesToShow);
  const [isSearchFailed, setIsSearchFailed] = React.useState(false);

  const handleSearchMovie = (searchQuery) => {
    const moviesList = filterMovies(savedMovies, searchQuery, isShort);
    if (moviesList.length === 0) {
      setIsSearchFailed(true);
      setInfoToolTip({ isOpen: true, type: 'error', text: 'ничего не найдено' });
    } else {
      setIsSearchFailed(false);
      setSortedMovies(moviesList);
      setMoviesToShow(moviesList);
    }
  }

  const handleSetShort = () => {
    if (!isShort) {
      setIsShort(true);
      localStorage.setItem(`${currentUser.email} - shortSavedMovies`, true);
      setMoviesToShow(setShortMovies(sortedMovies));
      setShortMovies(sortedMovies).length === 0 ? setIsSearchFailed(true) : setIsSearchFailed(false);
    }
  }

  React.useEffect(() => {
    if (localStorage.getItem(`${currentUser._id} - shortSavedMovies`) === 'true') {
      setIsShort(true);
      setMoviesToShow(setShortMovies(savedMovies));
    } else {
      setIsShort(false);
      setMoviesToShow(savedMovies);
    }
  }, [savedMovies, currentUser]);

  React.useEffect(() => {
    setSortedMovies(savedMovies);
    savedMovies.length !== 0 ? setIsSearchFailed(false) : setIsSearchFailed(true);
  }, [savedMovies]);

  return (
    <>
      <Header authUser={isLoggedIn} />
      {isLoggedIn &&
        <main className="content">
          <SearchForm
          handleSearch={handleSearchMovie}
          handleSetShort={handleSetShort}
          isShort={isShort}
          />
          {!isSearchFailed &&
            <MoviesCardList
              isSaved={true}
              moviesList={moviesToShow}
              savedMovies={savedMovies}
              onMovieDelete={onMovieDelete}
            />
          }
        </main>
      }
      <Footer />
    </>
  );
}