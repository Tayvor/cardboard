import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetRandomCard, thunkStoreCard } from "../../redux/cards";
import './Search.css';

export default function Search() {
  const dispatch = useDispatch();
  const [imageURL, setImageURL] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardList, setCardList] = useState([]);
  const [cardIdx, setCardIdx] = useState(0);
  const randomCard = useSelector((state) => state.cards.randomCard);

  useEffect(() => {
    console.log(randomCard)
  }, [randomCard])

  const getRandomCard = async (e) => {
    e.preventDefault();
    const res = await dispatch(thunkGetRandomCard());
    setImageURL(res.imgUrl);
  }

  const saveCard = async (e) => {
    e.preventDefault();

    const cardData = new FormData();
    cardData.append('scryfall_id', randomCard['id']);
    cardData.append('tcgplayer_id', randomCard['tcgplayer_id']);
    cardData.append('oracle_id', randomCard['oracle_id']);

    cardData.append('name', randomCard['name']);
    cardData.append('mana_cost', randomCard['mana_cost']);
    cardData.append('power', randomCard['power']);
    cardData.append('toughness', randomCard['toughness']);
    cardData.append('rarity', randomCard['rarity']);
    cardData.append('img_url', randomCard['image_uris']['normal']);

    cardData.append('artist', randomCard['artist']);
    cardData.append('artist_id', randomCard['artist_id']);

    cardData.append('set_code', randomCard['set']);
    cardData.append('set_name', randomCard['set_name']);
    cardData.append('set_id', randomCard['set_id']);

    const res = await dispatch(thunkStoreCard(cardData));
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

      {randomCard.name &&
        <button
          onClick={(e) => saveCard(e)}
          className='randomImgBtn'
        >Save</button>
      }
    </div>
  )
}
