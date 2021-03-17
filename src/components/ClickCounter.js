import React, { Component } from 'react'
import withCounter from './WithCounter'

class ClickCounter extends Component {

    render() {

        const {count, incrementer} = this.props
        return (
            <div>
                <button onClick ={incrementer}>{this.props.name}Clicked {count} times</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter,10)
