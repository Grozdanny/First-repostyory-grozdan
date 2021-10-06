import React from 'react';
import ReactDOM from 'react-dom';

const Normal = (
    <h1>Hello World!</h1>
)
class Hello extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            name: "World",
            date: new Date(),
        };
    }
    tick() {
        this.setState({ date: new Date() });
      }
    componentDidMount() {
        setInterval(() => {
          this.tick();
        }, 1000);
      }

    render() {
        return <> 
        <h1>It's {this.state.date.toLocaleTimeString()}</h1>
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