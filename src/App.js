import React, { Component } from 'react';

import './App.css';

import Navbar from './components/navbar/navbar.component';
import HomePage from './pages/home/home.component';


class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <HomePage />
      </div>
    );
  }
}

export default App;
