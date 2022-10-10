import './App.css';
import { Navigate, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { mainApi } from '../../utils/MainApi';
import NotFound from '../NotFound/NotFound';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import React from 'react';
import * as auth from '../../utils/auth';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Preloader from '../Preloader/Preloader';
import InfoToolTip from '../InfoToolTip/InfoTooltip';
import { errorHandler } from '../../utils/errorHandler';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';


function App() {

  const push = useNavigate();
  const { path } = useLocation();

  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [infoToolTip, setInfoToolTip] = React.useState({});

  const handleCloseInfoToolTip = () => {
    setInfoToolTip({ ...infoToolTip, isOpen: false })
  }

  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      setInfoToolTip({ ...infoToolTip, isOpen: false })
    }
  }

  const tokenCheck = () => {
    auth.getContent()
      .then((res) => {
        if (res.data._id) {
          setIsLoggedIn(true);
          setCurrentUser(res.data)
        } else {
          console.log('tokenCheck else worked!')
        }
      })
      .catch(console.log)
  }

  const handleLogin = (email, password) => {
    auth.authorization(email, password)
      .then((res) => {
        setCurrentUser(res.data);
        tokenCheck();
        push("/movies");
      })
      .catch((err) => {
        errorHandler(err, setInfoToolTip);
      })
  };

  const handleRegister = (name, email, password) => {
    setIsLoading(true);
    auth.registration(name, email, password)
      .then((res) => {
        setCurrentUser(res.data);
        tokenCheck();
        push("/movies");
      })
      .catch((err) => {
        errorHandler(err, setInfoToolTip);
      })
      .finally(() => setIsLoading(false));
  };

  const handleUpdUser = (name, email) => {
    mainApi.editProfile(name, email)
      .then((res) => {
        setCurrentUser(res.data);
      })
      .catch((err) => {
        errorHandler(err, setInfoToolTip);
      })
      .finally(() => setInfoToolTip({ isOpen: true, type: 'success', text: 'Данные сохранены' }));
  }

  const handleMovielike = (movie) => {
    mainApi.addMovie(movie)
      .then(res => {
        setSavedMovies([res, ...savedMovies]);
        console.log('add movie', res);
      })
      .catch((err) => {
        errorHandler(err, setInfoToolTip)
      });
  }

  const handleMovieDelete = (movie) => {
    const movieToDelete = savedMovies.find((i) => i.movieId === movie.id || i.movieId === movie.movieId);
    mainApi.deleteMovie(movieToDelete._id)
      .then((res) => {
        console.log('del movie', res);
        const newSavedMovies = savedMovies.filter(i => {
          if (movie.id === i.movieId || movie.movieId === i.movieId) {
            return false;
          } else {
            return true;
          }
        });
        setSavedMovies(newSavedMovies);
      })
      .catch((err) => {
        errorHandler(err, setInfoToolTip);
      });
  }



  const handleSignOut = () => {
    auth.signout()
      .then(() => {
        setIsLoggedIn(false);
        push('/')
      })
  }

  const getContent = () => {
    if (isLoggedIn) {
      Promise.all([mainApi.getSavedMovies(), mainApi.getProfile()])
        .then(([movies, user]) => {
          const usersMovies = movies.data.filter(movie => movie.owner === currentUser._id);
          setCurrentUser(user.data);
          setSavedMovies(usersMovies);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  React.useEffect(() => {
    tokenCheck();
    console.log('initial tocken check when component did mount', currentUser);
    if (isLoggedIn) getContent();
  }, []);

  React.useEffect(() => {
    isLoggedIn ? push("/movies") : push("/");
  }, [isLoggedIn]);

  /* React.useEffect(() => {
    tokenCheck();
    if (isLoggedIn) getContent();
  }, [isLoggedIn]); */

  return (
    <div className="App">
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route
              path='/movies'
              element={
                <ProtectedRoute path={path} isLoggedIn={isLoggedIn}>
                  <Movies
                    isLoggedIn={isLoggedIn}
                    savedMovies={savedMovies}
                    onMovieLike={handleMovielike}
                    setInfoToolTip={setInfoToolTip}
                    setIsLoading={setIsLoading}
                    path={path} />
                </ProtectedRoute>
              }
            />
            <Route
              path='/saved-movies'
              element={
                <ProtectedRoute path={path} isLoggedIn={isLoggedIn}>
                  <SavedMovies
                    savedMovies={savedMovies}
                    isSaved={true}
                    isLoggedIn={isLoggedIn}
                    onMovieDelete={handleMovieDelete}
                    setInfoToolTip={setInfoToolTip}
                    path={path} />
                </ProtectedRoute>
              }
            />
            <Route
              path='/profile'
              element={
                <ProtectedRoute path={path} isLoggedIn={isLoggedIn}>
                  <Profile
                    handleSignOut={handleSignOut}
                    onUpdate={handleUpdUser} />
                </ProtectedRoute>
              }
            />
            <Route exact path='/sign-in' element={
              !isLoggedIn ?
                <Login handleLogin={handleLogin} /> : <Navigate to='/movies' />
            } />
            <Route exact path='/sign-up' element={
              !isLoggedIn ?
                <Register handleRegister={handleRegister} /> : <Navigate to='/movies' />
            } />
            <Route exact path='/' element={<Main path={path} isLoggedIn={isLoggedIn} />}
            />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Preloader isLoading={isLoading} />
          <InfoToolTip
            config={infoToolTip}
            onClose={handleCloseInfoToolTip}
            onOverlayClick={handleOverlayClick}
          />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
