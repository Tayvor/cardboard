import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Cards.css';

export default function Cards() {
  const cards = useSelector((state) => state.cards);

  useEffect(() => {
    console.log('Cards: ', cards)
  }, [cards])

  return (
    <>
      <h1>cards view</h1>
    </>
  )
}
