import { useState } from "react";
import './Menu.css';

export default function Menu({ setView }) {

  return (
    <ul className="menu">
      <li
        onClick={() => setView('search')}
      >Search</li>
      <hr />

      <li
        onClick={() => setView('cards')}
      >Cards</li>
      <hr />

      <li
        onClick={() => setView('decks')}
      >Decks</li>
      <hr />
    </ul>
  )
}
