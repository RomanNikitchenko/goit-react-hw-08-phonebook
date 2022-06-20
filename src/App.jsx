// import { Switch, Route } from 'react-router-dom';
import Phonebook from 'views/PhonebookView';
import AppBar from 'components/AppBar';

const App = () => {
  return (
    <div>
      <AppBar />
      <Phonebook />
    </div>
  );
};

export default App;
