import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {withGA} from './HOC';

const Button = (props) =>{
  return(
    <button onClick={(props.registerEvent)} >{props.count}</button>
  )
}

const Image = (props) =>{
  return (
    <img src={logo} alt="img" onMouseMove={(props.registerEvent)}/>
  )
}
const HocButton = withGA('clicked')(Button);
const HocImage = withGA('hovered')(Image);

class App extends Component {

  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <HocButton />
        <HocImage />
      </div>

    );
  }
}

export default App;
