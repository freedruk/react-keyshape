import React, { Component } from 'react';
import { Keyshape } from 'react-keyshape';
import KeyshapeHOC from './components/KeyshapeHOC';

import vinylsvg from './svg/vinyl-dj-dark-grey.svg';
import babysadhappysvg from './svg/baby-happysad-icon-dark-grey.svg';
import diamonddarksvg from './svg/diamond-dark-grey.svg';
import loaderdarksvg from './svg/loader-dark.svg';
import notepaddarksvg from './svg/notepad-icon-dark-grey.svg';
import lovedarksvg from './svg/show-some-love-dark-grey.svg';
import smartphonedarksvg from './svg/smartphone-dark-grey.svg';
import soundclouddarksvg from './svg/soundcloud-icon-dark-grey.svg';
import trippysundarksvg from './svg/trippy-sun-dark.svg';
import twitterdarksvg from './svg/twitter-icon-dark-grey.svg';
import youtubedarksvg from './svg/youtube-icon-dark-grey.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <KeyshapeHOC/>
        <div>
        <Keyshape svg={vinylsvg}/>
        <Keyshape svg={babysadhappysvg}/>
        <Keyshape svg={diamonddarksvg}/>
        <Keyshape svg={loaderdarksvg}/>
        <Keyshape svg={notepaddarksvg}/>
        <Keyshape svg={lovedarksvg}/>
        <Keyshape svg={smartphonedarksvg}/>
        <Keyshape svg={soundclouddarksvg}/>
        <Keyshape svg={trippysundarksvg}/>
        <Keyshape svg={twitterdarksvg}/>
        <Keyshape svg={youtubedarksvg} callback={ (player) => {
            setTimeout(()=>{ player.pause() }, 8000); // Pauses the animation after 8s.
        }}/>
        </div>
        <div><strong>The icons are made by my good friend <a href="https://beta.designforventures.co/Free-Animated-SVG-Icons/">Juan Maguid</a></strong></div>
      </div>
    );
  }
}

export default App;
