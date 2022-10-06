import './App.css';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';

function App() {
  return (
    <div className="App">
      <div className="page">
        <Routes>
          <Route path='/sign-in' element={<Login />} />
          <Route path='/sign-up' element={<Register />} />
          <Route path='/' element={<Main />} />
          <Route path='/movies' element={
            <Main loggedIn={true}
            />}
          />
          <Route path='/saved-movies' element={
            <Main
              loggedIn={true}
              isSaved={true}
            />}
          />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
