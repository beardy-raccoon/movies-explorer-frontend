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
  const path = useLocation();
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [infoToolTip, setInfoToolTip] = React.useState({});
  const authorized = localStorage.getItem('authorized');

  const handleCloseInfoToolTip = () => {
    setInfoToolTip({ ...infoToolTip, isOpen: false })
  };

  const handleOvelrayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      setInfoToolTip({ ...infoToolTip, isOpen: false })
    }
  };

  const tokenCheck = () => {
    auth.getContent()
      .then((res) => {
        if (res.data._id) {
          localStorage.setItem('authorized', true);
          setIsLoggedIn(true);
          setCurrentUser(res.data)
          push(path.pathname);
        } else {
          setIsLoggedIn(false);
          handleSignOut();
        }
      })
      .catch(console.log)
  };

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
    setIsLoading(true);
    mainApi.editProfile(name, email)
      .then((res) => {
        setCurrentUser(res.data);
        setInfoToolTip({ isOpen: true, type: 'success', text: 'Данные сохранены' });
      })
      .catch((err) => {
        errorHandler(err, setInfoToolTip);
      })
      .finally(() => setIsLoading(false));
  };

  const handleMovielike = (movie) => {
    mainApi.addMovie(movie)
      .then(res => {
        setSavedMovies((savedMovies => [...savedMovies, res.data]));
      })
      .catch((err) => {
        errorHandler(err, setInfoToolTip)
      });
  };

  const handleMovieDelete = (movie) => {
    const movieToDelete = savedMovies.find((i) => i.movieId === movie.id || i.movieId === movie.movieId);
    mainApi.deleteMovie(movieToDelete._id)
      .then((res) => {
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
  };

  const handleSignOut = () => {
    auth.signout()
      .then(() => {
        setIsLoggedIn(false);
        localStorage.removeItem('authorized');
        localStorage.removeItem(`${currentUser._id} - movieSearch`);
        localStorage.removeItem(`${currentUser._id} - shortMovies`);
        localStorage.removeItem(`${currentUser._id} - movies`);
        localStorage.removeItem(`${currentUser._id} - shortSavedMovies`);
        push('/')
      });
  };

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
    };
  };

  React.useEffect(() => {
    tokenCheck();
    if (isLoggedIn) {
      getContent();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return (
    <div className="App">
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route
              path='/movies'
              element={
                <ProtectedRoute path={path} isLoggedIn={authorized}>
                  <Movies
                    isLoggedIn={isLoggedIn}
                    savedMovies={savedMovies}
                    onMovieLike={handleMovielike}
                    onMovieDelete={handleMovieDelete}
                    setInfoToolTip={setInfoToolTip}
                    setIsLoading={setIsLoading}
                    path={path} />
                </ProtectedRoute>
              }
            />
            <Route
              path='/saved-movies'
              element={
                <ProtectedRoute path={path} isLoggedIn={authorized}>
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
              exact path='/profile'
              element={
                <ProtectedRoute path={path} isLoggedIn={authorized}>
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
            onOvelrayClick={handleOvelrayClick}
          />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
