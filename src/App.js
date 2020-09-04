import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar.component';
import HomePage from './pages/home/home.component';
import ProfilePage from './pages/profile/profile.component';


class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/profile' component={ProfilePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
