import { useSelector } from 'react-redux';
import './Profile.css';

export default function Profile() {
  const user = useSelector((state) => state.session.user);

  return (
    <h1>{`Welcome ${user.username}!`}</h1>
  )
}
