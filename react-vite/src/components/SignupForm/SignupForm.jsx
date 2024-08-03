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
        Email:
        <input type="text" />
      </label>

      <label>
        Username:
        <input type="text" />
      </label>

      <label>
        Password:
        <input type="text" />
      </label>

      <button>Submit</button>
    </form>
  )
}

export default SignupForm;
