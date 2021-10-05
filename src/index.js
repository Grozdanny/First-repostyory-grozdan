import React from 'react';
import ReactDOM from 'react-dom';

const Normal = (
    <h1>Hello World!</h1>
)
class Hello extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            name: "World"
        }
    }

    render() {
        return <> 
        <h1>Hello {this.state.name} </h1>
        <input type="text" onChange={(event) => this.change(event)} />
        </>
    }
    change(event){
        console.log(event.target.value);
        this.setState({name: event.target.value});
    }
}
 const Box = ( <>
    {Normal}
    <hr/>
    <Hello/>
    </>
 )
ReactDOM.render(Box, document.getElementById('root'));