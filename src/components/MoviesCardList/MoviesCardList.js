import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import React from 'react';
import useWindowResize from '../../hooks/useWindowResize';
import { SCREEN_PARAMS } from '../../utils/consts';
import { useLocation } from 'react-router-dom';

export default function MoviesCardList({ isSaved, moviesList, onMovieLike, onMovieDelete, savedMovies, isShort }) {
  // const currentUser = React.useContext(CurrentUserContext);
  const location = useLocation();
  const windowSize = useWindowResize();
  const { desktop, tablet, mobile } = SCREEN_PARAMS;
  const [isMount, setIsMount] = React.useState(true);
  const [moviesToShow, setMoviesToShow] = React.useState([]);
  const [cardsCount, setCardsCount] = React.useState({ total: 12, more: 3 });


  React.useEffect(() => {
    if (location.pathname === '/movies') {
      if (windowSize > desktop.width) {
        setCardsCount(desktop.cards);
      } else if (windowSize <= desktop.width && windowSize > mobile.width) {
        setCardsCount(tablet.cards);
      } else {
        setCardsCount(mobile.cards);
      }
      return () => setIsMount(false);
    }
  }, [windowSize, isMount, desktop, tablet, mobile, location.pathname]);

  React.useEffect(() => {
    if (moviesList.length) {
      const res = moviesList.filter((item, i) => i < cardsCount.total);
      setMoviesToShow(res);
    }
  }, [moviesList, cardsCount.total]);

  function handleAddMoreMovies() {
    const start = moviesToShow.length;
    const end = start + cardsCount.more;
    const additional = moviesList.length - start;

    if (additional > 0) {
      const newCards = moviesList.slice(start, end);
      setMoviesToShow([...moviesToShow, ...newCards]);
    }
  }

  const filterSaved = (arr, movie) => {
    return arr.find((item) => {
      return item.movieId === (movie.id || movie.movieId);
    });
  }

  return (
    <section className="movies-list">
      <div className="movies-list__container">
        <ul className="movies-list__movies">
          {moviesToShow?.map(movie => (
            <MoviesCard
              key={movie.id || movie._id}
              movie={movie}
              onMovieLike={onMovieLike}
              onMovieDelete={onMovieDelete}
              isSaved={filterSaved(savedMovies, movie)}
            />
          ))}
        </ul>
        {location.pathname === '/movies' && moviesToShow.length >= 5 && moviesToShow.length < moviesList.length && (
          <button
            className="button movies-list__button"
            type="button"
            onClick={handleAddMoreMovies}>Ещё</button>
        )}
      </div>
    </section>
  );
}


