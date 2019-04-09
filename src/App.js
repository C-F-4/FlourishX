import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Routes from './Routes';

import './App.scss';

import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="main-container">
          <div className="site-nav-wrapper"><Header /></div>
          <Routes />
        </main>
      </div>
    );
  }
}

export default App;
