import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WebPage from './components/WebPage';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
         
         <h2> Example</h2>

        <WebPage/>
      </div>
    );
  }
}

export default App;
