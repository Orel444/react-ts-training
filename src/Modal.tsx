import React, { Component} from "react";
import ReactDOM from "react-dom";

type props = {
    close: any
}

class Modal extends Component<props> {
    popUp: HTMLDivElement;

    constructor(props: any) {
      super(props);
      
      this.popUp = document.createElement('div')
        
      document.body.appendChild(this.popUp)
    }

    render() {
        return ReactDOM.createPortal (
            <div className="modal" onClick={this.props.close}>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, inventore? Reiciendis deleniti beatae ex ratione, quas dolores quia illo fuga aut perspiciatis? Esse, atque earum minima magni error ratione repudiandae.</p>
                    <button>Fermer</button>
                </div>
            </div>,
            this.popUp
        )
    }
}

export default Modal;