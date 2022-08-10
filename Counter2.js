

import React from "react"
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mya : "Riyash"
        };
    }
    changeContent(){
        this.setState({
            mya:"Riyash Patel"
        });
    }
    render(){
        return(
            <div>
                value is {this.state.mya}
                <button onClick={this.changeContent.bind(this)}>Click Me</button>
            </div>
        );
    }
}
export default Counter;

