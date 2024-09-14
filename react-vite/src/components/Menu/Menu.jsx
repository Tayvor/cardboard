import { useNavigate, NavLink } from "react-router-dom";
import './Menu.css';

export default function Menu() {

  return (
    <nav id="menu">
      <NavLink
        to='/search'
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >Search</NavLink>

      <NavLink
        to='/cards'
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >Cards</NavLink>

      <NavLink
        to='/decks'
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >Decks</NavLink>
    </nav>
  )
}
