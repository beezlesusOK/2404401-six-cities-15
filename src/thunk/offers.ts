import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';

import {Endpoint} from '../util/const';
import {TOffer} from '../util/types';

export const fetchOffers = createAsyncThunk<TOffer[], void, { extra: AxiosInstance }>(
  'fetchOffers',
  async (_arg, {extra: api}) => {
    const response = await api.get<TOffer[]>(Endpoint.Offers);
    return response.data as TOffer[]|[];
  }
);
