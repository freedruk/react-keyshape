import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Keyshape from './components/Keyshape';

class App extends Component {
  render() {
    return (
      <div>
        <Keyshape/>
        <div><strong>Icon made by my good friend <a href="https://beta.designforventures.co/Free-Animated-SVG-Icons/">Juan Maguid</a></strong></div>
      </div>
    );
  }
}

export default App;
