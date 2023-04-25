import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Card } from 'src/types/interfaces';

export const fetchCards = createAsyncThunk('cards/fetchCards', async () => {
  const response = await axios.get<Card[]>('/api/allcards');

  return response.data;
});
