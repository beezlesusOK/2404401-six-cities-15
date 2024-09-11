import React from 'react';
import classNames from 'classnames';

import {offersSelectors} from '../../store/slices/offers';
import {useAppSelector} from '../../store/hooks';
import OffersList from '../offer/offers-list';
import LocationList from '../../components/map/list';
import {StatusLoading} from '../../util/const';
import {Loader} from '../../components/loader/loader';
import {getCitiesFromOffers, getSortedOffers} from '../../util/func';

export default function Main(): React.JSX.Element {
  const statusLoading = useAppSelector(offersSelectors.selectStatusLoading);
  const offers = useAppSelector(offersSelectors.selectOffers);

  const cities = getCitiesFromOffers(offers);

  const activeCity = useAppSelector(offersSelectors.selectCity);
  const activeSortItem = useAppSelector(offersSelectors.selectSortItem);

  let offersFiltered = activeCity
    ? offers.filter((offer) => offer.city.name === activeCity.name)
    : offers;

  offersFiltered = getSortedOffers(offersFiltered, activeSortItem);

  if (statusLoading === StatusLoading.Loading) {
    return <Loader />;
  }

  const pageMainClass = classNames(
    'page__main page__main--index',
    {'page__main--index-empty': offersFiltered.length === 0}
  );
  return (
    <main className={pageMainClass}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <LocationList cities={cities} />
      </div>
      <div className="cities">
        {
          statusLoading === StatusLoading.Loading
            ? <Loader />
            : <OffersList nameBlock="Places" offers={offersFiltered}/>
        }
      </div>
    </main>
  );
}
