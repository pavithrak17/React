import React, { Component } from 'react';
import './App.css';
import Product from './Components/Product';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Welcome</h1>
          <Product />
      </div>
    );
  }
}

export default App;