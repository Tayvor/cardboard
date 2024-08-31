import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { thunkLogout } from '../../redux/session';
import './Header.css';


export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const logout = async (e) => {
    e.preventDefault();
    const res = await dispatch(thunkLogout());
    navigate('/')
  }

  return (
    <div className='header'>
      <h1
        className='title'
        onClick={() => navigate('')}
      >cardBoard</h1>

      {user?.username ?
        <button
          className='loginBtn btn'
          onClick={(e) => logout(e)}
        >Logout</button>
        :
        <button
          className='loginBtn btn'
          onClick={() => navigate('/login')}
        >Login</button>
      }
    </div >
  )
}
