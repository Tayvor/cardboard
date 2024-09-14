import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { thunkSignup } from '../../redux/session';
import './Forms.css';

function SignupForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    console.log(errors)
  }, [errors])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({})

    if (password !== confirmPassword) {
      console.log('Passwords do not match!')
      return
    }

    const data = new FormData();
    data.append('email', email);
    data.append('username', username);
    data.append('password', password);

    const res = await dispatch(thunkSignup(data));

    if (res) {
      const error = res;
      setErrors(error)
      return
    }

    navigate('/');
  }

  return (
    <form onSubmit={handleSubmit} className='authForm'>
      <h1 className='formTitle'>Signup</h1>

      <div className="error">{errors.email}</div>
      <div className="error">{errors.username}</div>

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
