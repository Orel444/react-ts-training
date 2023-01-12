import React, {Component} from "react";
import Car from "./Cars";

interface Props {
    title: string
  }

class MyCars extends Component<Props>{
 
    state = {
         voiture: [
             {name: 'Ford', color: 'red', year: 2000},
             {name: 'Mercedes', color: 'black', year: 2010},
             {name: 'Peugeot', color: 'green', year: 2018}
         ]
    }

    addTenYears = () => {
        
    }

    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                
                <button onClick={this.addTenYears}> + 10 ans</button>

                <Car color="Blue" year="2010" >{this.state.voiture[0].name}</Car>
                <Car color="Blue" year="2010" >{this.state.voiture[1].name}</Car>
                <Car color="Blue" year="2010" >{this.state.voiture[2].name}</Car>
                
            </div>
        )
    }
}

export default MyCars;