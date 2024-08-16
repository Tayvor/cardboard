import { useNavigate } from 'react-router-dom';
import './Header.css';


export default function Header() {
  const navigate = useNavigate();

  return (
    <div className='header'>
      <button className="menuBtn btn">Menu</button>

      <h1 className='title'>cardBoard</h1>

      <button
        className='loginBtn btn'
        onClick={() => navigate('/login')}
      >Login</button>
    </div>
  )
}
