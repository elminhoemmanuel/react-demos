import React, { Component } from 'react'
import withCounter from './WithCounter'

class HoverCounter extends Component {

    render() {

        const {count, incrementer} = this.props
        return (
            <div>
                <h1 onMouseOver ={incrementer}>hoverd over {count} times</h1>
            </div>
        )
    }
}

export default withCounter(HoverCounter)
