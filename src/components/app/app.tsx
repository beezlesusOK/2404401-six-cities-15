import WelcomeScreen from '../../pages/main/main.tsx';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorScreen from '../404/404.tsx';
import { AppRoutes, AuthStatus } from '../../util/const.ts';
import LoginScreen from '../../pages/login/login-screen.tsx';
import FavoritesScreen from '../../pages/favorites/favorites-screen.tsx';
import OfferScreen from '../../pages/offer/offer-screen.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import Layout from '../../layout/layout.tsx';
import {useAppSelector, useActionCreators} from '../../store/hooks';
import {offersActions, offersSelectors} from '../../store/slices/offers';
import {userActions} from '../../store/slices/user';
import {getToken} from '../../services/token';
import { useEffect } from 'react';


export default function App() {
  const {checkAuthAction, setAuthorization} = useActionCreators(userActions);
  useEffect(() => {
    if (getToken()) {
      checkAuthAction();
    } else {
      setAuthorization(AuthStatus.NoAuth);
    }
  }, [checkAuthAction, setAuthorization]);

  const {fetchOffersAction} = useActionCreators(offersActions);
  useEffect(() => {
    fetchOffersAction();
  }, [fetchOffersAction]);

  const offers = useAppSelector(offersSelectors.selectOffers);
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.Main} element={<Layout />}>
            <Route index element={<WelcomeScreen />}/>
            <Route path={AppRoutes.Login} element={<LoginScreen />}/>
            <Route
              path={AppRoutes.Favorites}
              element={(
                <PrivateRoute>
                  <FavoritesScreen offers={offers.filter((offer) => offer.isFavorite)} />
                </PrivateRoute>
              )}
            />
            <Route path={AppRoutes.OfferId} element={<OfferScreen/>}/>
            <Route path={AppRoutes.Error404} element={<ErrorScreen />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
