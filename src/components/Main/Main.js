import './Main.css';

import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

export default function Main({ loggedIn, isSaved }) {
  return (
    <>
      <Header authUser={loggedIn} />
      {!loggedIn &&
        <main className="content">
          <Promo />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Portfolio />
        </main>
      }
      {loggedIn &&
        <main className="content">
          <SearchForm />
          <MoviesCardList isSaved={isSaved} />
        </main>
      }
      <Footer />
    </>
  );
}