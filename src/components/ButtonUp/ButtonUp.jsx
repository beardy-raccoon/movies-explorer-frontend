import React from "react";
import './ButtonUp.css';

export default function ButtonUp({ isShown }) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }
  return (
    isShown &&
    <button className="button button-up__button" type="button" onClick={scrollToTop} aria-label="Наверх"></button>
  );
}