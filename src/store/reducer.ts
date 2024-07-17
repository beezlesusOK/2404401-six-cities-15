import { createReducer } from '@reduxjs/toolkit';
import {changeCity, changeSortOffers, getOffers} from './action';
import {sortOptions} from '../util/const';
import { TCity, TOffer, TSortItem } from '../util/types';
import { cities } from '../mocks/city';
import { generateOffers } from '../mocks/offers';

const offers: TOffer = generateOffers(50);

type TOffersState = {
  city: TCity;
  offers: TOffer[];
  sort: TSortItem;
}

const initialState: TOffersState = {
  city: cities[0],
  offers: offers,
  sort: sortOptions[0],
};


export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSortOffers, (state, action) => {
      state.sort = action.payload;
    });
});
export default reducer;
