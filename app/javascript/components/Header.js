import React from "react";
import PropTypes from "prop-types";


class Header extends React.Component{
    constructor(props){
        super(props);
		}				
    render(){ 
			let salir,edit,registrar,iniciar_sesion;			
			if(this.props.user_signed_in){				
				salir = <a data-method="delete" href={this.props.url + "/sign_out"}>Salir</a>
				edit = <a href={this.props.url + "/edit"}>Editar</a>
			}
			else{
				registrar = <a href={this.props.url+"/sign_up"}>Registrarse</a>
        iniciar_sesion= <a href={this.props.url+"/sign_in"}> Iniciar Sesion</a>
			}
        return( 
           <div className="header">
           <img src="/img/logo.png" className="img"/>           
						 <div className="header-right">
						 {salir}{registrar}{iniciar_sesion}             
               <a href={this.props.link} className="active">Todas las juntas</a>
               <a href={this.props.link + "/new"} className="active">Programar Junta</a>
               <a href="" className="active">Home</a>
              </div>
            </div>
        );
    }
}

Header.propTypes = {
    variable: PropTypes.string
};


export default Header
