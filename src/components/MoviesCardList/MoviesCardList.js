import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import React from 'react';
import { moviesList } from '../../utils/moviesList';

export default function MoviesCardList(props) {

  const checkScreen = () => {
    let result
    if (window.innerWidth >= 1280) {
      result = 16
    } else if (window.innerWidth >= 768) {
      result = 8
    } else {
      result = 5
    }
    return result
  }

  const [moviesToShow, setMoviesToShow] = React.useState(moviesList.slice(0, checkScreen()));

  const sliceMoviesList = (num) => moviesList.slice(0, num)

  const handleSetMoviesToShow = () => {
    if (window.innerWidth >= 1280) {
      setMoviesToShow(sliceMoviesList(16))
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
      setMoviesToShow(sliceMoviesList(moviesToShow.length + 1))
    }
  }

  React.useEffect((checkScreen) => {
    sliceMoviesList(checkScreen);
  }, []);

  React.useEffect(() => {
    window.addEventListener('resize', () => setTimeout(handleSetMoviesToShow, 1000));
  });

  return (
    <section className="movies-list">
      <div className="movies-list__container">
        <ul className="movies-list__movies">
          {props.isSaved ?
            moviesToShow?.filter(movie => movie.saved === true)
              .map(movie => (
                <MoviesCard
                  key={movie.id}
                  movie={movie}
                />)) :
            moviesToShow.map(movie => (
              <MoviesCard
                key={movie.id}
                movie={movie}
              />))
          }
        </ul>
        <button className="button movies-list__button" type="button" onClick={handleAddMoreMovies}>Ещё</button>
      </div>
    </section>
  );
}