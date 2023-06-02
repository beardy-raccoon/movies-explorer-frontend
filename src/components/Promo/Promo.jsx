import React, { useState } from 'react';
import './Promo.css';
import NavTab from '../NavTab/NavTab';
import Terminal from '../Terminal/Terminal';

export default function Promo() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);
  return (
    <>
      <section className="promo" id="promo">
        <h1 className="promo__title">Movies Explorer</h1>
        <div className="promo__readme">
          <button className="promo__button" onClick={() => setIsTerminalOpen(true)}>README.md</button>
        </div>
        <Terminal
          isTerminalOpen={isTerminalOpen}
          setIsTerminalOpen={setIsTerminalOpen}
        />
      </section>
      <NavTab />
    </>
  );
}