import React from "react"
class Counter extends React.Component{
    render(){
        var a=10;
        var b=20;
        return (
            <div>
                <h1>Counter</h1>
                A value is {a}
                <br/>
                B value is {b}
            </div>
        )
    }
}
export default Counter;
