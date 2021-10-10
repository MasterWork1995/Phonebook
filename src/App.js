import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './Components/Container';
import { AppBar } from './Components/AppBar/AppBar';
import { Suspense } from 'react';
import { HomePage } from './pages/HomePage';
import { RegistrationPage } from './pages/RegistrationPage';
import { LoginPage } from './pages/LoginPage';
import { ContactsPage } from './pages/ContactsPage';

const App = () => {
  return (
    <>
      <AppBar />
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/registration" component={RegistrationPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/contacts" component={ContactsPage} />
        </Switch>
      </Container>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default App;
