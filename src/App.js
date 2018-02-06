import React, { Component } from 'react';
import './App.css';
import Keyshape from './components/Keyshape';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Keyshape/>
        <div><strong>The icon made by my good friend <a href="https://beta.designforventures.co/Free-Animated-SVG-Icons/">Juan Maguid</a></strong></div>
      </div>
    );
  }
}

export default App;
