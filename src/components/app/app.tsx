import WelcomeScreen from '../../pages/main/main.tsx';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorScreen from '../404/404.tsx';
import { AppRoute, AuthorizationStatus } from '../../util/const.ts';
import LoginScreen from '../../pages/login/login-screen.tsx';
import FavoritesScreen from '../../pages/favorites/favorites-screen.tsx';
import OfferScreen from '../../pages/offer/offer-screen.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import { TOffer } from '../../util/types.tsx';
import Layout from '../../layout/layout.tsx';


export default function App({offers}: {offers: TOffer[]}): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<Layout />}>
            <Route index element={<WelcomeScreen />}/>
            <Route path={AppRoute.Login} element={<LoginScreen />}/>
            <Route
              path={AppRoute.Favorites}
              element={(
                <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                  <FavoritesScreen offers={offers.filter((offer) => offer.isFavorite)} />
                </PrivateRoute>
              )}
            />
            <Route path={AppRoute.OfferId} element={<OfferScreen offers={offers} authStatus={AuthorizationStatus.Auth} />}/>
            <Route path={AppRoute.Error404} element={<ErrorScreen />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
