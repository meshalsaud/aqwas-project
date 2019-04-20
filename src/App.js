import React, { Component } from 'react';
import BaseRouter from './components/Routes';
import * as actions from './store/actions/resturant';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BaseRouter />
      </div>
    );
  }
}
export default App;
