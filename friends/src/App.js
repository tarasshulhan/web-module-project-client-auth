import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import Logout from './components/Logout';
import Friends from './components/Friends';
import AddForm from './components/AddNewFriend';


function App() {

  const isLoggedIn = localStorage.getItem('token');
  // const username = localStorage.getItem('username');

  return (
    <Router>
    <div className="App">
      <ul>
        <li>
          {!isLoggedIn &&<Link to="/login">Login</Link>}
        </li>
        <li>
          {isLoggedIn && <Link to="/logout">Logout</Link>}
        </li>
        <li>
          {isLoggedIn && <Link to="/friends">Friends</Link>}
        </li>
        <li>
          {isLoggedIn && <Link to="/add">Add Friend</Link>}
        </li>
      </ul>
      <Switch>
          <PrivateRoute exact path="/friends" component={Friends} />
          {/* <Route exact path="/protected" component={GasPrices} /> */}
          <PrivateRoute path="/logout" component={Logout} />
          <PrivateRoute path="/add" component={AddForm} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />    
        </Switch>
      </div>
    </Router>
  );
}

export default App;
