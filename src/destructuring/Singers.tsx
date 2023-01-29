import React from "react";
import Display from "./Display";

type props = {
    name: string,
    age: string
}

class Users extends React.Component<props> {
    
    render() {
        return(
            <div>
                <p>Chanteur: {this.props.name}</p>
            </div>
        )        
    }

}

export default Users;