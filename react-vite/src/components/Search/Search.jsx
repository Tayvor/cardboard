import { useState, useEffect } from "react";
import './Search.css';

export default function Search() {
  const [imageURL, setImageURL] = useState('');
  const [cardName, setCardName] = useState('the one ring');

  useEffect(() => {
    if (cardName) {
      getCardByName();
    };
  }, [cardName])

  const getRandomCard = async (e) => {
    e.preventDefault();
    setCardName('');
    const res = await fetch('https://api.scryfall.com/cards/random');

    if (res.ok) {
      const data = await res.json();
      setImageURL(data.image_uris.normal);
    }
  }

  const getCardByName = async () => {
    const res = await fetch(`https://api.scryfall.com/cards/search?q=${cardName}`);

    if (res.ok) {
      const data = await res.json();
      setImageURL(data.data[0].image_uris.normal);
    }
  }


  return (
    <div className="search">
      <input
        type="text"
        className="searchBar"
        onChange={(e) => setCardName(e.target.value)}
        value={cardName}
        placeholder="Search.."
      />

      {imageURL &&
        <img className='randomImg' src={imageURL} alt="" />
      }

      <button
        onClick={(e) => getRandomCard(e)}
        className='randomImgBtn'
      >Random Card</button>
    </div>
  )
}
