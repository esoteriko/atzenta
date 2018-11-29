import React from "react"
import PropTypes from "prop-types"
class Index extends React.Component {
  constructor(props){ 
    super(props);
    this.state = {
      name: this.props.junta,
      validate: false,      
    };
    this.method = this.method.bind(this)
  }
  method() {
    if(this.state.validate == false){
    this.setState({name: "no"});
    this.setState({validate: true});
    }
    else{
      this.setState({name: "si"});
      this.setState({validate: false});
    }
  }
  render () {
    return (
    	<div>
    	<h2>clickea</h2>
        <button onClick={this.method}>accion</button>
        <h2>{this.state.name}</h2>
      
      </div>

    );
  }
}

Index.propTypes = {
  junta: PropTypes.string
};
export default Index
