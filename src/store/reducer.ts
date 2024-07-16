import { createReducer } from '@reduxjs/toolkit';
import { getOffers, changeCity } from './action';
import { TCity, TOffer } from '../util/types';
import { cities } from '../mocks/city';
import { generateOffers } from '../mocks/offers';

const offers: TOffer = generateOffers(50);

type TOffersState = {
  city: TCity;
  offers: TOffer[];
}

const initialState: TOffersState = {
  city: cities[0],
  offers: offers,
};


export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload;
    });
});
export default reducer;
