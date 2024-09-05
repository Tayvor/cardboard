import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Menu from '../Menu';
import Search from '../Search';
import Cards from '../Cards';
import Decks from '../Decks';
import './Dashboard.css';


export default function Dashboard() {
  const user = useSelector((state) => state.session.user);
  const [view, setView] = useState('search');

  return (
    <div className='dashboard'>
      <Menu setView={setView} />

      {view == 'search' &&
        <Search />
      }
      {view == 'cards' &&
        <Cards />
      }
      {view == 'decks' &&
        <Decks />
      }
    </div>
  )
}
