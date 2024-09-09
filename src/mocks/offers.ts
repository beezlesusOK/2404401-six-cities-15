import {TCity, TOffer, TLocationCoordinates} from '../util/types';
import {cities} from './city';

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
function getRandomLocationByCity({location}: TCity): TLocationCoordinates {
  const minStepCoordinate: number = -0.01;
  const maxStepCoordinate: number = 0.01;
  const coordinates = location;
  coordinates.latitude += getRandomFloat(minStepCoordinate, maxStepCoordinate);
  coordinates.longitude += getRandomFloat(minStepCoordinate, maxStepCoordinate);
  return coordinates;
}

const createOffer = (index: number): TOffer => {
  const city: TCity = cities[getRandomInt(0, 2)];

  return {
    id: String(index),
    title: `Apartment ${String(index)}`,
    type: 'apartment',
    price: getRandomInt(100, 1000),
    city: city,
    location: getRandomLocationByCity(structuredClone(city)),
    isFavorite: !!getRandomInt(0, 1),
    isPremium: !!getRandomInt(0, 1),
    rating: getRandomInt(0, 5),
    description: 'desc',
    bedrooms: getRandomInt(1, 2),
    goods: [
      'Hearting'
    ],
    host: {
      avatarUrl: `https://source.unsplash.com/random/74x74/?user&sid=${String(index)}`,
      name: 'Host name',
      isPro: !!getRandomInt(0, 1),
    },
    previewImage: '',
    images: [
      `https://source.unsplash.com/random/300×300?sig=${String(index)}1&apartment`,
      `https://source.unsplash.com/random/300×300?sig=${String(index)}2&apartment`,
      `https://source.unsplash.com/random/300×300?sig=${String(index)}3&apartment`,
    ],
    maxAdults: getRandomInt(1, 5),
    reviews: [
      {
        id: getRandomInt(1, 50),
        avatarUrl: `https://source.unsplash.com/random/74x74/?user&sid=${String(getRandomInt(1, 50))}`,
        name: `Vasya ${getRandomInt(1, 9)}`,
        rate: getRandomInt(0, 5),
        message: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        date: `April ${getRandomInt(2015, 2024)}`,
      },
      {
        id: getRandomInt(1, 50),
        avatarUrl: `https://source.unsplash.com/random/74x74/?user&sid=${String(getRandomInt(1, 50))}`,
        name: `Vasya ${getRandomInt(1, 9)}`,
        rate: getRandomInt(0, 5),
        message: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        date: `April ${getRandomInt(2015, 2024)}`,
      },
      {
        id: getRandomInt(1, 50),
        avatarUrl: `https://source.unsplash.com/random/74x74/?user&sid=${String(getRandomInt(1, 50))}`,
        name: `Vasya ${getRandomInt(1, 9)}`,
        rate: getRandomInt(0, 5),
        message: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        date: `April ${getRandomInt(2015, 2024)}`,
      },
    ]
  };
};

export const generateOffers = (offersCount: number): TOffer[] => (
  Array.from(new Array(offersCount), (_, index): TOffer => createOffer(index))
);
