import './Main.css';

import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

export default function Main({ isLoggedIn, isSaved, path }) {
  return (
    <>
      <Header authUser={isLoggedIn} path={path} />
      <main className="content">
        <Promo authUser={isLoggedIn}/>
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}