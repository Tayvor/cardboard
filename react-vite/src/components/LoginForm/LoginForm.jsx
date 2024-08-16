import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import { thunkLogin } from '../../redux/session';

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
    <form onSubmit={handleSubmit} className='loginForm'>
      <h1>Login</h1>

      <label>
        <input
          type="text"
          placeholder='Username'
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>

      <label>
        <input
          type="text"
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      <button
        className='submitBtn'
        disabled={username && password ? false : true}
      >Submit</button>

      <div className="footer">Need an account?</div>
      <div
        className="signupText"
        onClick={() => navigate('/signup')}
      >Sign Up!</div>
    </form>
  )
}

export default LoginForm
