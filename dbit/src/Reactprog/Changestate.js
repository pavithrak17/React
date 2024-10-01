import React, { Component } from 'react';
class Changestate extends Component {
  constructor() {
    super();
    this.state={
        message:"Welcome"// state variable is message
    };
    //console.log("message")
  }

  // Arrow function ensures 'this' is bound correctly.
  change=()=>{
    this.setState({
        message:"ThankYou"
    });
  }

  render(){
    return (
    <div>
        <h1>{this.state.message}</h1>
         {/* Notice we're invoking 'change' method directly with () */}
        <button onClick={this.change}><h1> Click here</h1></button>
    </div>
    );
  }
}
export default Changestate;