import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './LoginForm.css';

function LoginForm() {

  const handleSubmit = () => {
    console.log('submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className='loginForm'>
      <div className="wrapper">
        <h1>Login</h1>

        <label>
          Username:
          <input type="text" />
        </label>

        <label>
          Password:
          <input type="text" />
        </label>

        <button>Submit</button>
      </div>
    </form>
  )
}

export default LoginForm
