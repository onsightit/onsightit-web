import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './Home.jsx';
import Login from './Login.jsx';
import store from '../store.js';

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <div>
          <Route
            exact
            path='/'
            component={(props) => window.sessionStorage.getItem('jwt') ? <Redirect to='/home' /> : <Landing />}
          />
          <Route
            exact
            path='/home'
            component={(props) => window.sessionStorage.getItem('jwt') ? <Home /> : <Redirect to='/login' />}
          />
          <Route
            exact
            path='/login'
            component={(props) => window.sessionStorage.getItem('jwt') ? <Redirect to='/home' /> : <Login />}
          />
          <Route
            exact
            path='/register'
            component={(props) => window.sessionStorage.getItem('jwt') ? <Redirect to='/home' /> : props => <Login isRegister />}
          />
        </div>
      </Provider>
    );
  }
}
