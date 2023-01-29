import React from "react";
import Parents from "./Parents";

const Enfant = (props: {name:string, leState:Parents["state"], rep: any}) => {

    const btnRep = props.leState.messageParents !== null ? 
    (<button onClick={props.rep}>Réponse</button>) : 
    (<button disabled>Réponse</button>);

    return(
        <div>
            <h2>{props.name}</h2>
            {btnRep}
            <p>{props.leState.messageEnfant}</p>
        </div>
    )
}

export default Enfant;