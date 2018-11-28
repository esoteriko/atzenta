import React from "react"
import PropTypes from "prop-types"
class Index extends React.Component {
  constructor(props){ 
    super(props);
    this.state = {
      name: this.props.junta
    };
    this.method = this.method.bind(this)
  }
  method() {
    this.setState({name: "no"});
  }
  render () {
    const style  = {
      margin: 0
    }
    return (
    	<div style={style}>
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
