import { createReducer } from '@reduxjs/toolkit';
import { CardsResponse } from 'src/types/interfaces';
import { fetchCards } from 'src/models/thunks';

const initialState: CardsResponse = {
  cards: [],
};

export const cardsReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchCards.fulfilled, (_, action) => ({
    cards: action.payload,
  }));
});
