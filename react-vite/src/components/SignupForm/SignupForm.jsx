import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SignupForm.css';

function SignupForm() {

  const handleSubmit = () => {
    console.log('submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className='signupForm'>
      <h1>Signup</h1>

      <label>
        <input
          type="text"
          placeholder='Email'
        />
      </label>

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

export default SignupForm;
