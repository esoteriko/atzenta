import React from "react"
import PropTypes from "prop-types"

class LinkLogin extends React.Component {
  constructor(props){ 
    super(props);      
  }
  render () {
    return (
    	<div>
        <a href={this.props.url+"/sign_up"}>Registrarse</a>|    	            
        <a href={this.props.url+"/sign_in"}> Iniciar Secion</a>  
      </div>

    );
  }
}

export default LinkLogin
