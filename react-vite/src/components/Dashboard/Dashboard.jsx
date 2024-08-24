import { useSelector } from 'react-redux';
import './Dashboard.css';

export default function Dashboard() {
  const user = useSelector((state) => state.session.user);

  return (
    <div className='dashboard'>
      <section className='dashboardLeft'>
        <button>Create a Deck!</button>
      </section>

      <section className='dashboardRight'>
        <h1>Welcome, {user?.username}!</h1>
      </section>
    </div>
  )
}
