import WelcomeScreen from '../../pages/main/main.tsx';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorScreen from '../404/404.tsx';
import { AppRoutess, AuthorizationStatus } from '../../util/const.ts';
import LoginScreen from '../../pages/login/login-screen.tsx';
import FavoritesScreen from '../../pages/favorites/favorites-screen.tsx';
import OfferScreen from '../../pages/offer/offer-screen.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import Layout from '../../layout/layout.tsx';
import {offersSelectors} from '../../store/reducer';
import {useAppSelector} from '../../store';


export default function App() {
  const offers = useAppSelector(offersSelectors.selectOffers) ?? [];
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutess.Main} element={<Layout />}>
            <Route index element={<WelcomeScreen />}/>
            <Route path={AppRoutess.Login} element={<LoginScreen />}/>
            <Route
              path={AppRoutess.Favorites}
              element={(
                <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                  <FavoritesScreen offers={offers.filter((offer) => offer.isFavorite)} />
                </PrivateRoute>
              )}
            />
            <Route path={AppRoutess.OfferId} element={<OfferScreen offers={offers} authStatus={AuthorizationStatus.Auth} />}/>
            <Route path={AppRoutess.Error404} element={<ErrorScreen />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
