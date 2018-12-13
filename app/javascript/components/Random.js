import React from "react";

class Random extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    numero: ""
    };
    this.randomNumber = this.randomNumber.bind(this);
  }
  randomNumber(){
    this.setState({numero: Math.random() * 10 + 1})
  }
  render(){
    return(
      <div>
        <button onClick={randomNumber()}>decide</button>
        <h1>{this.state.numero}</h1>
        </div>
    );
  }
}

export default Random