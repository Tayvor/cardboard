import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Cards.css';

export default function Cards() {
  // const cards = useSelector((state) => state.cards.collection);
  const [cards, setCards] = useState(0);

  // useEffect(() => {
  //   console.log(cards)
  // }, [cards])

  const getUserCards = async () => {
    const res = await fetch('/api/cards/all');

    if (res.ok) {
      const data = await res.json();
      setCards(data);
    }
  }

  return (
    <>
      <h1>cards view</h1>

      {cards ?
        cards.map((card) => {
          <div>{card.name}
            <img src={card.img_url} />
          </div>
        })
        :
        ''
      }

      <button
        onClick={getUserCards}
      >get cards</button>
    </>
  )
}
