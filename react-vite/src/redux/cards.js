import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collection: {},
  randomCard: {},
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    storeCard(state, action) {
      state.collection[action.payload.id] = action.payload
    },
    setRandomCard(state, action) {
      state.randomCard = action.payload
    },
  }
})

export const thunkGetRandomCard = () => async dispatch => {
  const res = await fetch('https://api.scryfall.com/cards/random');

  if (res.ok) {
    const data = await res.json();
    dispatch(setRandomCard(data));
    const imgUrl = data.image_uris.normal;
    return { imgUrl: imgUrl };

  } else {
    const error = await res.json();
    return error;
  }
}

export const thunkGetUserCards = () => async dispatch => {
  const res = await fetch('/api/cards/all');

  if (res.ok) {
    const data = await res.json();
  }
}

export const thunkStoreCard = (card) => async dispatch => {
  const res = await fetch('/api/cards/create', {
    method: 'POST',
    body: card,
  });

  if (res.ok) {
    const data = await res.json();
  }
}

export const { storeCard, setRandomCard } = cardsSlice.actions;
export default cardsSlice.reducer;
