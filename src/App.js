// Default Import
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import Home from './components/main/Home';
import Play from './components/main/Play';
import Login from './components/login/Login';

// CSS
import './components/main/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/play' component={Play} />
      </Switch>
    </Router>
  );
};

export default App;
