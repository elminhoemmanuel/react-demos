import React, { Component } from 'react'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"omale"
        }
        console.log("const")
    }

    static getDerivedStateFromProps (props,state){
        console.log("getderivedstate")
        return null
    }

    componentDidMount(){
        console.log("componentdidmount")
    }

    shouldComponentUpdate(){
        console.log("shouldcompoupdate");
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('getsnapshot')
        return null

    }

    componentDidUpdate(){
        console.log("compodidupdate")
    }

    changeState =() =>{
        this.setState({
            name:"coding"
        })
    }
    
    render() {
        console.log("render")
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.changeState}>Change state</button>
            </div>
        )
    }
}

export default LifecycleA
