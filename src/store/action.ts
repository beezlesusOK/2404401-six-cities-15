import { createAction } from '@reduxjs/toolkit';
import { TOffer, TCity, TSortItem } from '../util/types';

export const changeCity = (createAction<TCity>('changeCity'));
export const getOffers = createAction<TOffer[]>('getOffers');
export const changeSortOffers = createAction<TSortItem>('changeSortOffers');
