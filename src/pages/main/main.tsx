import React from 'react';
import { Helmet } from 'react-helmet-async';
import OffersList from '../offer/offers-list';
import {cities} from '../../mocks/city';
import LocationList from '../../components/map/list';


export default function Main(): React.JSX.Element {

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 городов</title>
      </Helmet>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList cities={cities} />
        </div>
        <div className="cities">
          <OffersList nameBlock='Places' />
        </div>
      </main>
    </div>
  );
}
