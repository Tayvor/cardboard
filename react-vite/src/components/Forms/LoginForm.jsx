import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { thunkLogin } from '../../redux/session';
import './Forms.css';

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('username', username);
    data.append('password', password);

    const res = await dispatch(thunkLogin(data));

    if (res) {
      const error = await res.json();
      return
    }

    navigate('/');
  }

  return (
    <form onSubmit={handleSubmit} className='authForm'>
      <h1 className='formTitle'>Login</h1>

      <input
        type="text"
        value={username}
        placeholder='Username'
        onChange={(e) => setUsername(e.target.value)}
        className='authInput'
        required
      />

      <input
        type="password"
        value={password}
        placeholder='Password'
        onChange={(e) => setPassword(e.target.value)}
        className='authInput'
        required
      />

      <button
        className='authSubmit'
      >Submit</button>
    </form>
  )
}

export default LoginForm
