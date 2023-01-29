import React, { useState, Component } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MyCars from './components/MyCars'
import Parents from './components/Parents'
import Display from './destructuring/Display'
import LifeCycle from './components/LifeCycle'
//import PortComp from './portails/PortComp'
import Modal from './Modal'

class App extends Component {

  constructor(props: any) {
    super(props)
  
    this.state = {
       showModal: false
    }
  }

  handleShow = () => {
    this.setState({
      showModal: true
    })
  }

  handleHide = () => {
    this.setState({
      showModal: false
    })
  }

  render() {

    const modal = this.state.showModal && (<Modal close={this.handleHide}/>) 

    return (
      <div className="App">
        <button onClick={this.handleShow}>Afficher le Modal</button>
        {modal}
      </div>
    );
  }
  
}


// function App() {
  
//     return (
//       <div className="App">
        
//       </div>
//     );

// }

export default App;