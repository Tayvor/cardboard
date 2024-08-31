import { useState } from 'react';
import { useSelector } from 'react-redux';
import './Dashboard.css';
import Menu from '../Menu';
import Search from '../Search';


export default function Dashboard() {
  const user = useSelector((state) => state.session.user);
  const [view, setView] = useState('');

  return (
    <div className='dashboard'>
      <Menu />
      <Search />
    </div>
  )
}
