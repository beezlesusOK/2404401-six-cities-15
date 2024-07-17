import {State} from './state';

export const selectOffers = (state: State) => state.offers;
export const selectCity = (state: State) => state.city;
export const selectSortItem = (state: State) => state.sort;

export default {selectCity, selectOffers, selectSortItem};
