import { maxNearOffers } from './const';
import {TOffer, TSortItem} from '../util/types';

export function getNearOffers(offers: TOffer[], curOffer: TOffer): TOffer[] {
  const nearOffers = [];
  for (const offer of offers) {
    if (
      offer.city === curOffer.city
      && offer.id !== curOffer.id
      && nearOffers.length < maxNearOffers
    ) {
      nearOffers.push(offer);
    } else if (nearOffers.length === maxNearOffers) {
      break;
    }
  }
  return nearOffers;
}

export function getSortedOffers(offers: TOffer[], sortItem: TSortItem) {
  switch (sortItem.code) {
    case 'popular':
      return offers;
    case 'price_low_to_high':
      return offers.sort((a, b) => a.price - b.price);
    case 'price_high_to_low':
      return offers.sort((a, b) => b.price - a.price);
    case 'top_rated_first':
      return offers.sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
}
