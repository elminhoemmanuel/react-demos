import React, { Component } from 'react'
import FRinput from './FRinput'

class FRparent extends Component {

    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef();
    }

    clickHandler = () =>{
        this.inputRef.current.focus();
    }
    

    render() {
        return (
            <div>
                <FRinput ref={this.inputref} />
                <button onClick={this.clickHandler}>Click to focus input</button>
            </div>
        )
    }
}

export default FRparent
