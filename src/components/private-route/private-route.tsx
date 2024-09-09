
import {Navigate} from 'react-router-dom';
import {AppRoutess, AuthorizationStatus} from '../../util/const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoutess.Login} />
  );
}

export default PrivateRoute;
