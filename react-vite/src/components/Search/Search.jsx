import { useState, useEffect } from "react";
import './Search.css';

export default function Search() {
  const [imageURL, setImageURL] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardList, setCardList] = useState([]);
  const [cardIdx, setCardIdx] = useState(0);

  useEffect(() => {
    console.log('Card Idx: ', cardIdx)
    console.log(cardList[cardIdx]?.image_uris.normal)
  }, [cardIdx])

  const getRandomCard = async (e) => {
    e.preventDefault();
    const res = await fetch('https://api.scryfall.com/cards/random');

    if (res.ok) {
      const data = await res.json();
      setImageURL(data.image_uris.normal);
    }
  }

  const getCardByName = async () => {
    const res = await fetch(`https://api.scryfall.com/cards/search?q=${cardName}&unique=prints&order=set`);

    if (res.ok) {
      const cards = await res.json();
      setImageURL(cards.data[0].image_uris.normal);
      setCardList(cards.data);
    }
  }

  const showNextCard = (e) => {
    e.preventDefault()
    if (cardIdx < cardList.length - 1) {
      setCardIdx(prev => prev + 1);
      setImageURL(cardList[cardIdx].image_uris.normal);
    }
  }

  const showPrevCard = (e) => {
    e.preventDefault()
    if (cardIdx > 0) {
      setCardIdx(prev => prev - 1);
      setImageURL(cardList[cardIdx].image_uris.normal);
    }
  }


  return (
    <div className="search">
      <div>
        <input
          type="text"
          className="searchBar"
          onChange={(e) => setCardName(e.target.value)}
          placeholder="Enter a card name"
        />

        <button
          className="searchBtn"
          onClick={() => getCardByName()}
        >Go!</button>
      </div>

      {imageURL &&
        <div>
          <button
            onClick={(e) => showPrevCard(e)}
          >prev</button>

          <img className='randomImg' src={imageURL} alt="" />

          <button
            onClick={(e) => showNextCard(e)}
          >next</button>

        </div>
      }

      <button
        onClick={(e) => getRandomCard(e)}
        className='randomImgBtn'
      >Random Card</button>
    </div>
  )
}
