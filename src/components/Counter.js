import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    increment(){

        this.setState(prevState => ({
            count:prevState.count+1
        }))

        // this.setState({
        //     count:this.count + 1
        // })
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        
    }
    

    render() {
        return (
            <div>
                <div>Count -{this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increase Count</button> 
            </div>
        )
    }
}

export default Counter
