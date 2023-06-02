import React, { useState } from 'react';
import './Promo.css';
import NavTab from '../NavTab/NavTab';
import Terminal from '../Terminal/Terminal';

export default function Promo({ authUser }) {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  return (
    <>
      <section className="promo" id="promo">
        <h1 className="promo__title">Movies Explorer</h1>
        {!authUser && <button className="promo__button" onClick={() => setIsTerminalOpen(true)}>README.md</button>}
        <Terminal
          isTerminalOpen={isTerminalOpen}
          setIsTerminalOpen={setIsTerminalOpen}
        />
      </section>
      <NavTab />
    </>
  );
}