import React, {Component} from 'react';

class Greet extends Component{

    render(){
        const {name} = this.props
        return (
            <div>
                <h1>Hello {name}</h1>
            </div>
        );
    }

    // render(){
    //     return (
    //         React.createElement('div',{id:"hello"},
    //             React.createElement('h1',null,"Hello there")
    //         )
    //     );
    // }
}

export default Greet;