import React from "react"
import PropTypes from "prop-types"
class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "si"
    };
    this.method = this.method.bind(this)
  }
  method() {
    this.setState({name: "no"});
  }
  render () {
    return (
    	<div>
    	<h1>Estoy en Rails y uso React UuU</h1>
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
