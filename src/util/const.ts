import leaflet from 'leaflet';
import {TSortItem} from '../util/types';

export const OFFER_INSIDE_ITEM = ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine',
  'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'];

export const Setting = {
  messageCount: 3,
  placesCount: 312,
  cardsCount: 5,
} as const;

export enum AppRoutes {
  Main='/',
  Login='/login',
  Favorites='/favorites',
  Offer='/offer',
  OfferId='/offer/:id',
  Error404='/*',
}

export enum AuthStatus {
  Auth = 'Auth',
  NoAuth = 'NoAuth',
  Unknown = 'Unknown',
}

export const defaultCustomIcon = leaflet.icon({
  iconUrl: '../../../markup/img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [14, 39],
});
export const currentCustomIcon = leaflet.icon({
  iconUrl: '../../../markup/img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [14, 39],
});
export const maxNearOffers = 3;

export const sortOptions: TSortItem[] = [
  {
    code: 'popular',
    name: 'Popular',
  },
  {
    code: 'price_low_to_high',
    name: 'Price: Low to High',
  },
  {
    code: 'price_high_to_low',
    name: 'Price: high to Low',
  },
  {
    code: 'top_rated_first',
    name: 'Top rated first',
  }
];
export enum Endpoint {
  Offers = '/offers',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
}

export enum StatusLoading {
  None,
  Loading,
  Success,
  Failed,
}
