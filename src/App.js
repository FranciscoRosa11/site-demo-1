import logo from './logo.svg';
import React, { Component } from 'react';
import {
  Route,
  Switch,
  useHistory
} from 'react-router-dom';
import AppHeader from './components/common/AppHeader/AppHeader';
import About from './components/about/About';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: false
    }
  }

  render() {
    return (
      <div className="app">
        <div className="app-top-box">
          <AppHeader  />
        </div>
        <div className="app-body">
          <Route exact path="/about" component={About}></Route>
        </div>
      </div>
    );
  }
}

export default App;