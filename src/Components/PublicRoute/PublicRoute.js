import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router';
import { authSelectors } from '../../redux/auth';

export default function PublicRoute({
  children,
  restricted = false,
  redirectedTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectedTo} /> : children}
    </Route>
  );
}
