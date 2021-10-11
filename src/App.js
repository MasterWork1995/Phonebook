import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './Components/Container';
import { AppBar } from './Components/AppBar/AppBar';
import { authOperations, authSelectors } from './redux/auth';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import PublicRoute from './Components/PublicRoute/PublicRoute';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const isGetCurrentUser = useSelector(authSelectors.isGetCurrentUser);

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      {isGetCurrentUser && (
        <Container>
          <Suspense fallback={<h1 className="loading">Loading...</h1>}>
            <Switch>
              <PublicRoute path="/" exact>
                <HomePage />
              </PublicRoute>

              <PublicRoute
                path="/registration"
                exact
                restricted
                redirectTo="/contacts"
              >
                <RegistrationPage />
              </PublicRoute>

              <PublicRoute
                path="/login"
                exact
                restricted
                redirectedTo="/contacts"
              >
                <LoginPage />
              </PublicRoute>

              <PrivateRoute path="/contacts" exact redirectedTo="/login">
                <ContactsPage />
              </PrivateRoute>

              <Route>
                <Redirect to="/" />
              </Route>
            </Switch>
          </Suspense>
        </Container>
      )}
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default App;
