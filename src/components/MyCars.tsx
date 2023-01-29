import React, {Component, Fragment} from "react";
import Car from "./Cars";

// interface Props {
//     title: string
//   }

class MyCars extends Component{
 
    state = {
         voitures: [
             {name: 'Ford', color: 'red', year: 2000},
             {name: 'Mercedes', color: 'black', year: 2010},
             {name: 'Peugeot', color: 'green', year: 2018}
         ],
         titre: 'Mon catalogue voitures'
    }

    addTenYears = () => {
        
        const updatedState = this.state.voitures.map((param) => {
            return param.year -= 10;
        })
        
        this.setState({
            updatedState
        })
    }

    render(){

        const year = new Date().getFullYear();

        return (
            <>
                <h1>{this.state.titre}</h1>
                
                <button onClick={this.addTenYears}> + 10 ans</button>

                <table>
                <tr>
                    <th>Marque</th>
                    <th>Age</th>
                    <th>Couleur</th>
                </tr>
  
                {
                    this.state.voitures.map((voiture, index) => {
                        return(
                            <div key={index}>
                                <Car color={voiture.color} year={year - voiture.year}>{voiture.name}</Car>
                            </div>
                        )
                    })
                }
                </table>
            </>
        )
    }
}

export default MyCars;