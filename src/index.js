import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-globally'

import CounterControls from './Counter/CounterControls'
import CounterInfo from './Counter/CounterInfo'

import GlobalName from './Name/GlobalName'
import LocalName from './Name/LocalName'
import AccessGlobalName from './Name/AccessGlobalName'


const initialGlobalState = {
    counter: 0,
    name: ''
}

class App extends Component {
    render () {
      return (
        <div>
          <CounterControls />
          <CounterInfo />
          <hr />
          <GlobalName />
          <LocalName />
          <AccessGlobalName />
        </div>
      )
    }
  }

ReactDOM.render(
    <Provider globalState={initialGlobalState}>
        <App />
    </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
