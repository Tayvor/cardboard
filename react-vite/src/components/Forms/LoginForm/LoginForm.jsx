import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { thunkLogin } from '../../../redux/session';
import '../../Forms/Forms.css';

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await dispatch(
      thunkLogin({
        username,
        password,
      })
    )

    console.log('submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className='authForm'>
      <h1 className='formTitle'>Login</h1>

      <label>
        <input
          placeholder='Username'
          onChange={(e) => setUsername(e.target.value)}
          className='authInput'
          type="text"
          required
        />
      </label>

      <label>
        <input
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          className='authInput'
          type="password"
          required
        />
      </label>

      <button
        className='authSubmit'
      >Submit</button>

      <div className="footer">Need an account?
        <div
          className="footerLink"
          onClick={() => navigate('/signup')}
        >Sign Up!</div>
      </div>
    </form>
  )
}

export default LoginForm
