import React, { Component } from 'react';
import { Keyshape } from 'react-keyshape';
import KeyshapeHOC from './components/KeyshapeHOC';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MaterialCard from './components/MaterialCard';
import Slider from 'material-ui/Slider';

import { playpause, colorTransform, scaleOverTime, resetAnimation } from 'animations/keyshape';
import babysadhappysvg from './svg/baby-happysad-icon-dark-grey.svg';
import diamonddarksvg from './svg/diamond-dark-grey.svg';
import loaderdarksvg from './svg/loader-dark.svg';
import notepaddarksvg from './svg/notepad-icon-dark-grey.svg';
import lovedarksvg from './svg/show-some-love-dark-grey.svg';
import smartphonedarksvg from './svg/smartphone-dark-grey.svg';
import soundclouddarksvg from './svg/soundcloud-icon-dark-grey.svg';
import SunnySide from './svg/SunnySide.svg';
import twitterdarksvg from './svg/twitter-icon-dark-grey.svg';
import youtubedarksvg from './svg/youtube-icon-dark-grey.svg';
import vinyl2 from './svg/vinyl2.svg';

import './App.css';

const muiTheme = getMuiTheme();

class App extends Component {
  constructor(props){
    super(props);
    this.handleSliderChange = this.handleSliderChange.bind(this);
  }

  handleSliderChange(obj, newValue){
    // 10 fps is default for Keyshape-animations
    if(window.Keyshape){
        //debugger;
      window.Keyshape.players['SunnySide'].player.pause();  
      window.Keyshape.players['SunnySide'].player.time(newValue*10000);
      window.Keyshape.players['SunnySide'].player.play();
    }
  }

  render() {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <div className="App">
                <MaterialCard title="vinyl with hand" subtitle="Higher order component">   
                    <KeyshapeHOC/>
                </MaterialCard> 
                <MaterialCard title="baby-happysad-icon-dark-grey.svg" subtitle="Click animation to toggle pause/play"> 
                    <Keyshape svg={babysadhappysvg} callback={playpause}/>    
                </MaterialCard>
                <MaterialCard title="notepad-icon-dark-grey.svg" subtitle="Changes color based on Date.getTime()">   
                    <Keyshape svg={notepaddarksvg} callback={colorTransform}/>   
                </MaterialCard>
                <MaterialCard title="diamond-dark-grey.svg" subtitle="Scales up and down over time">   
                    <Keyshape svg={diamonddarksvg} callback={scaleOverTime}/>
                </MaterialCard>
                <MaterialCard title="vinyl2.svg" subtitle="Click animation to reset">   
                    <Keyshape svg={vinyl2} callback={resetAnimation}/>
                </MaterialCard>
                <MaterialCard title="SunnySide.svg" subtitle="Drag slider to fast-forward/reverse animation">   
                    <Keyshape svg={SunnySide} callback={()=>{}}/>
                    <Slider min={0} max={1} step={0.01} onChange={ this.handleSliderChange } style={{margin: '10px 30px'}} name="trippy-sun-dark-slider"/>
                </MaterialCard>                 
                <MaterialCard title="soundcloud-icon-dark-grey.svg" subtitle="">   
                    <Keyshape svg={soundclouddarksvg}/>
                </MaterialCard>
                <MaterialCard title="loader-dark.svg" subtitle="">   
                    <Keyshape svg={loaderdarksvg}/>
                </MaterialCard>
                <MaterialCard title="smartphone-dark-grey.svg" subtitle="">   
                    <Keyshape svg={smartphonedarksvg}/>
                </MaterialCard>
                <MaterialCard title="twitter-icon-dark-grey.svg" subtitle="">   
                    <Keyshape svg={twitterdarksvg}/>
                </MaterialCard>
                <MaterialCard title="youtube-icon-dark-grey.svg" subtitle="">   
                    <Keyshape svg={youtubedarksvg}/>
                </MaterialCard> 
                <MaterialCard title="show-some-love-dark-grey.svg" subtitle="">   
                    <Keyshape svg={lovedarksvg}/>
                </MaterialCard>
                <p className="App-intro">
                    Thanks to my friend <a href="https://www.designforventures.co/" alt="D4V">Juan Maguid</a> for the svg-icons!
                </p>
                <p className="App-intro">
                    You can find tutorials on how to use Keyshape app <a href="https://www.youtube.com/playlist?list=PLYgHlvJh8SlVCSevlEIbXP_tEP8_ZgwTu" alt="D4V">here</a> (also made by Juan :)
                </p>
        </div>
    </MuiThemeProvider>
    );
  }
}

export default App;


/*
                <KeyshapeHOC/>
        <Keyshape svg={diamonddarksvg}/>
        <Keyshape svg={loaderdarksvg}/>
        <Keyshape svg={notepaddarksvg}/>
        <Keyshape svg={lovedarksvg}/>
        <Keyshape svg={smartphonedarksvg}/>
        <Keyshape svg={soundclouddarksvg}/>
        <Keyshape svg={trippysundarksvg}/>
        <Keyshape svg={twitterdarksvg}/>
        <Keyshape svg={youtubedarksvg} callback={ (player, keyshapeElement) => {
            setTimeout(()=>{ player.pause() }, 8000); // Pauses the animation after 8s.
        }}/>
        </div>
        <div><strong>The icons are made by my good friend <a href="https://beta.designforventures.co/Free-Animated-SVG-Icons/">Juan Maguid</a></strong></div>
     

     */
