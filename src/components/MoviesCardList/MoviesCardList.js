import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useLocation } from 'react-router-dom';

export default function MoviesCardList({ isSaved, moviesList, onMovieLike, onMovieDelete, savedMovies }) {
  const currentUser = React.useContext(CurrentUserContext);

  const checkScreen = () => {
    let result
    if (window.innerWidth >= 1280) {
      result = 12
    } else if (window.innerWidth >= 768) {
      result = 8
    } else {
      result = 5
    }
    return result
  }

  const [moviesToShow, setMoviesToShow] = React.useState(moviesList?.slice(0, checkScreen()));

  const sliceMoviesList = (num) => moviesList?.slice(0, num)

  const handleSetMoviesToShow = () => {
    if (window.innerWidth >= 1280) {
      setMoviesToShow(sliceMoviesList(12))
    } else if (window.innerWidth >= 768) {
      setMoviesToShow(sliceMoviesList(8))
    } else {
      setMoviesToShow(sliceMoviesList(5))
    }
  }

  const handleAddMoreMovies = () => {
    if (window.innerWidth >= 1280) {
      setMoviesToShow(sliceMoviesList(moviesToShow.length + 4))
    } else if (window.innerWidth >= 768) {
      setMoviesToShow(sliceMoviesList(moviesToShow.length + 2))
    } else {
      setMoviesToShow(sliceMoviesList(moviesToShow.length + 2))
    }
  }

  React.useEffect((checkScreen) => {
    setMoviesToShow(sliceMoviesList(checkScreen));
  }, []);

  React.useEffect(() => {
    window.addEventListener('resize', () => setTimeout(handleSetMoviesToShow, 1000));
  });

  return (
    <section className="movies-list">
      <div className="movies-list__container">
        <ul className="movies-list__movies">
          {isSaved ?
            moviesToShow?.map(movie => (
              <MoviesCard
                key={movie._id || movie.id}
                movie={movie}
                onMovieLike={onMovieLike}
                isSaved={isSaved}
              />))
            :
            moviesToShow.filter((movie) => currentUser._id === movie._id || currentUser._id === movie.movieId)
              .map(movie => (
                <MoviesCard
                  key={movie._id || movie.id}
                  movie={movie}
                  onMovieDelete={onMovieDelete}
                  isSaved={isSaved}
                />))
          }
        </ul>
        {moviesToShow.length >= 5 && moviesToShow.length < moviesList.length &&
          <button className="button movies-list__button" type="button" onClick={handleAddMoreMovies}>Ещё</button>
        }
      </div>
    </section>
  );
}


