import React from "react";
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import AppBar from 'components/AppBar';
import authOperations from './redux/auth/auth-operations';
import authSelectors from './redux/auth/auth-selectors';
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoure'


const HomeViev = lazy(() => import('views/HomeView'));
const RegisterView = lazy(() => import('views/RegisterView'));
const LoginView = lazy(() => import('views/LoginView'));
const Phonebook = lazy(() => import('views/PhonebookView'));


const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch])

  return (
    <div>
      {isFetchingCurrentUser ? (
        <h1>Показываем React Skeleton</h1>
      ) : (
        <div>
          <AppBar />
          <Suspense fallback={<p>Загружаем...</p>}>
            <Switch>

              <PublicRoute exact path="/">
                <HomeViev />
              </PublicRoute>

              <PublicRoute exact path="/register" restricted>
                <RegisterView />
              </PublicRoute>

              <PublicRoute exact path="/login" redirectTo="/phonebook" restricted>
                <LoginView />
              </PublicRoute>

              <PrivateRoute exact path="/phonebook" redirectTo="/login">
                <Phonebook />
              </PrivateRoute>

              <Route path="*">
                <Redirect to="/" />
              </Route>

            </Switch>
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default App;
