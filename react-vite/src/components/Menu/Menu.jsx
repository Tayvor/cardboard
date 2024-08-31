import { useState } from "react";
import './Menu.css';

export default function Menu() {

  return (
    <ul className="menu">
      <li>Search</li>
      <hr />
      <li>Collection</li>
      <hr />
      <li>Decks</li>
      <hr />
    </ul>
  )
}
