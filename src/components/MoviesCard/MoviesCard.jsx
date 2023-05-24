import './MoviesCard.css';
import React from 'react';
import { toHours } from '../../utils/utils';
import { useLocation } from 'react-router-dom';

export default function MoviesCard({ movie, onMovieLike, onMovieDelete, isSaved }) {
  const location = useLocation();

  const handleMovieLike = () => {
    onMovieLike(movie);
  }

  const handleMovieDelete = () => {
    onMovieDelete(movie);
  }

  return (
    <li className="movies-card">
      <a href={movie.trailerLink} target={'_blank'} rel="noreferrer" className="movies-card__link">
        <img
          className="movie-card_img"
          src={movie.thumbnail}
          alt={movie.nameEN || movie.nameRU}
          title={`Описание: ${movie.description} \n\nСнято: ${movie.country} ${movie.year}г.`}
        />
      </a>
      <div className="movies-card__label">
        <p className="movies-card__title">{movie.nameEN || movie.nameRU}</p>
        {location.pathname === '/movies' &&
          <button
            type="button"
            className={`button movie-card__button ${isSaved ? 'movie-card__button_liked' : 'movie-card__button_nolike'}`}
            onClick={isSaved ? handleMovieDelete : handleMovieLike}>
          </button>
        }
        {isSaved && location.pathname === '/saved-movies' && (
          <button type="button" className="button movie-card__button movie-card__button_delete" onClick={handleMovieDelete}></button>
        )}
      </div>
      <p className="movies-card__time">{toHours(movie.duration)}</p>
    </li>
  );
}