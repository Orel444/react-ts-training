import React, { useState, Component } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MyCars from './components/MyCars'

class App extends Component {

  state = {
    titre: 'Mon catalogue voiture'
  }

  render() {
    return (
      <div className="App">
        <MyCars title={this.state.titre}/>
      </div>
    );
  }

}

export default App;