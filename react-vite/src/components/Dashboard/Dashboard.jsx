import { useState } from 'react';
import { useSelector } from 'react-redux';
import './Dashboard.css';

export default function Dashboard() {
  const user = useSelector((state) => state.session.user);
  const [imageURL, setImageURL] = useState('')

  const getRandomCard = async (e) => {
    e.preventDefault();
    const res = await fetch('https://api.scryfall.com/cards/random');

    if (res.ok) {
      const data = await res.json();
      console.log(data);
      setImageURL(data.image_uris.normal)
    }
  }

  return (
    <div className='dashboard'>
      {imageURL &&
        <img className='randomImg' src={imageURL} alt="" />
      }

      <button
        onClick={(e) => getRandomCard(e)}
      >Random Card</button>
    </div>
  )
}
