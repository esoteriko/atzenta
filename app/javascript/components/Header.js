import React from "react";
import PropTypes from "prop-types";


class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){    
        return( 
           <div className="header">
           <img src="/img/logo.png" className="img"/>           
             <div className="header-right">
               
               <a href={this.props.link} className="active">Todas las juntas</a>
               <a href="" className="active">Programar Junta</a>
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

//<img src={"<%= image_tag 'logo.png' %>"} className="logo" />