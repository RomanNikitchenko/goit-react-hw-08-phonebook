import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import AppBar from 'components/AppBar';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute'


const HomeViev = lazy(() => import('views/HomeView'));
const RegisterView = lazy(() => import('views/RegisterView'));
const LoginView = lazy(() => import('views/LoginView'));
const Phonebook = lazy(() => import('views/PhonebookView'));


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch])


  return (
    <div>
      <AppBar />

      <Switch>
        <Suspense fallback={<p>Загружаем...</p>}>
          <Route exact path="/" component={HomeViev} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          {/* <Route path="/phonebook" component={Phonebook} /> */}
          <PrivateRoute path="/phonebook">
            <Phonebook/>
          </PrivateRoute>
        </Suspense>
      </Switch>
    </div>
  );
};

export default App;
