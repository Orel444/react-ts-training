import React, { Component } from 'react'

class LifeCycle extends Component {

    state: any;
 
    constructor(props: any) {
        super(props)
    
        this.state = {
            name: "Orel",
            step: "One"
        }

        // Etape 1
    }
    
    componentDidMount(): void {
        // Etape 3
    }
   
    componentDidUpdate(prevProps: any, prevState: any) { 
        // Etape 4
    } 

    componentWillUnmount() {
        // Etape 5
    }

    render() {
        return (
            <div>
                <p>Chg: {this.state.step}</p>
                <p>Nom: {this.state.name}</p>
            </div>
        )

        // Etape 2
    }
}

export default LifeCycle