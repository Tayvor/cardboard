import { useState } from 'react';
import { useSelector } from 'react-redux';
import LoginForm from '../Forms/LoginForm';
import SignupForm from '../Forms/SignupForm';
import Profile from '../Profile';
import './Dashboard.css';


export default function Dashboard() {
  const user = useSelector((state) => state.session.user);
  const [component, setComponent] = useState(<LoginForm key='login' />)

  return (
    <div className='dashboard'>
      {user.id ? <Profile /> : component}

      {!user.id && component?.key == 'signup' &&
        <div className='dashboardLink'
          onClick={() => setComponent(
            <LoginForm key='login' />
          )}
        >Already have an account?
          <div>Login!</div>
        </div>
      }

      {!user.id && component?.key == 'login' &&
        <div className='dashboardLink'
          onClick={() => setComponent(
            <SignupForm key='signup' />
          )}
        >Need an account?
          <div>Sign Up!</div>
        </div>
      }

    </div>
  )
}
