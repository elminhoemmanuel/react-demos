import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             comment:"",
             topic:"react"
        }

        // this.handleUsernameChange = this.handleUsernameChange.bind("this")
    }
    
    handleUsernameChange = (event) =>{
        this.setState({
            username:event.target.value
        })
    }

    handleCommentChange = (event) =>{
        this.setState({
            comment:event.target.value
        })
    }

    handleTopicChange = (event) =>{
        this.setState({
            topic:event.target.value
        })
    }

    handleSubmit = (event) =>{
        alert(`${this.state.username} ${this.state.topic}`);
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input 
                        type="text" 
                        value={this.state.username}
                        onChange = {this.handleUsernameChange}
                    />
                </div>
                <div>
                    <label>Comment</label>
                    <input 
                        type="text" 
                        value={this.state.comment}
                        onChange = {this.handleCommentChange}
                    />
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange = {this.handletopicChange}>
                        <option value="react">React</option>
                        <option value="vue">Vue</option>
                        <option value="angular">Angular</option>
                    </select>
                </div>
                <button type="submit">Submit</button>

            </form>
        )
    }
}

export default Form
