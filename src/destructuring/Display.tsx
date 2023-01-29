import React, {Component} from "react";
import Users from "./Singers";

class Display extends Component {

    render() {
        return (
            <div>
                <h1>Musiciens</h1>
                <Users name="Eric Clapton" age="74"></Users>
                <Users name="Jimi Hendrix" age="27"></Users>
                <Users name="David Gilmour" age="73"></Users>
                <Users name="Carlos Santana" age="61"></Users>
            </div>
        )
    }
}

export default Display;