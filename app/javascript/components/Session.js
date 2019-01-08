import React from "react"
import PropTypes from "prop-types"

class Session extends React.Component {
  constructor(props){ 
    super(props);      
  }
  render () {
    return (
    	<div>      
      <p>Sesion actual <strong>{this.props.email}</strong></p>
      <a href={this.props.url + "/edit"}>Editar</a>|<a data-method="delete" href={this.props.url + "/sign_out"}>Salir</a>
      </div>

    );
  }
}

export default Session
