import React, {Component} from "react";


export default class Counter extends Component{
    
    constructor(){
        super();

        this.state = {
            counter:0
        }

       // this.pressCounter = this.pressCounter.bind(this); //??
    }

    pressCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    resetCounter = () =>{
        this.setState({
            counter: 0
        })
    }
    
    render(){
        return (
            <container>
                <button onClick={this.pressCounter}> Counter </button>
                <div className="text">
                    <text>{this.state.counter}</text>
                </div>
                <div>
                    <button onClick={this.resetCounter}> Reset </button>
                </div>
            </container>
        )
    }
}
