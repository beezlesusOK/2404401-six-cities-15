import { createAction } from '@reduxjs/toolkit';
import { TOffer, TCity } from '../util/types';

export const changeCity = (createAction<TCity>('changeCity'));
export const getOffers = createAction<TOffer[]>('getOffers');
