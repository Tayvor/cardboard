import { configureStore } from '@reduxjs/toolkit';
import sessionSlice from './session';
import cardsSlice from './cards';

export default configureStore({
  reducer: {
    session: sessionSlice,
    cards: cardsSlice,
  }
})
