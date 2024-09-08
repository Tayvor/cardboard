import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Forms.css';

function SignupForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    console.log('submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className='authForm'>
      <h1 className='formTitle'>Signup</h1>

      <label>
        <input
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          className='authInput'
          type="email"
          required
        />
      </label>

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

      <label>
        <input
          placeholder='Confirm Password'
          onChange={(e) => setConfirmPassword(e.target.value)}
          className='authInput'
          type="password"
          required
        />
      </label>

      <button
        className='authSubmit'
      >Submit</button>
    </form>
  )
}

export default SignupForm;
