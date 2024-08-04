import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './LoginForm.css';

function LoginForm() {

  const handleSubmit = () => {
    console.log('submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className='loginForm'>
      <h1>Login</h1>

      <label>
        <input
          type="text"
          placeholder='Username'
        />
      </label>

      <label>
        <input
          type="text"
          placeholder='Password'
        />
      </label>

      <button className='submitBtn'>Submit</button>
    </form>
  )
}

export default LoginForm
