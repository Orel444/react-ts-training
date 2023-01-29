import React, {Component} from "react";
import Enfant from "./Enfant";

class Parents extends Component {
    state = {
        messageParents: null,
        messageEnfant: null
    }

    ordreParents = () => {
        this.setState({
            messageParents: "Il est l'heure de manger"
        })
    }

    reponseEnfant = () => {
        this.setState({
            messageEnfant: "Ok j'arrive"
        })
    }

    render() {
        return (
            <div>
                <h1>Parents</h1>
                <button onClick={this.ordreParents}>Ordre des parents</button>
                <p>{this.state.messageParents}</p>
                <hr />

                <Enfant name="Tom" rep={this.reponseEnfant} 
                    leState={this.state}></Enfant>

            </div>
        )
    }
}

export default Parents;