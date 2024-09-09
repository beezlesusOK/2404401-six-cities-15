import React from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import {AppRoutess} from '../util/const';
import HeaderNav from './header-user';
import Header from './header';
import Footer from './footer';
import {useAppSelector} from '../store';
import {offersSelectors} from '../store/reducer';

export default function Layout(): React.JSX.Element {
  const {pathname} = useLocation() as { pathname: AppRoutess };
  const offers = useAppSelector(offersSelectors.selectOffers);

  let pageClassName: string = 'page';
  let logoLinkClassName: string = 'header__logo-link';
  let headerNav: React.JSX.Element | null = <HeaderNav />;
  let footer: React.JSX.Element | null = null;
  if (pathname === AppRoutess.Main) {
    pageClassName += ' page--gray page--main';
    logoLinkClassName += ' header__logo-link--active';
  } else if (pathname === AppRoutess.Login) {
    pageClassName += ' page--gray page--login';
    headerNav = null;
  } else if (pathname === AppRoutess.Favorites) {
    if (offers && offers.filter((offer) => offer.isFavorite).length === 0) {
      pageClassName += ' page--favorites-empty';
    }
    footer = <Footer />;
  }
  return (
    <div className={pageClassName}>
      <Header logoLinkClassName={logoLinkClassName} headerNav={headerNav}/>
      <Outlet />
      {footer}
    </div>
  );
}
