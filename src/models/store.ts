import { configureStore } from '@reduxjs/toolkit';
import { cardsReducer } from './reducers';

const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
