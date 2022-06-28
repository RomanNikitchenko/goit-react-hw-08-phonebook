import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import AppBar from 'components/AppBar';
import HomeViev from 'views/HomeView';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';
import Phonebook from 'views/PhonebookView';
import authOperations from './redux/auth/auth-operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch])


  return (
    <div>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomeViev} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/phonebook" component={Phonebook} />
      </Switch>
    </div>
  );
};

export default App;
