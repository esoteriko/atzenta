import React from "react";
import PropTypes from "prop-types";
import './Style.css';

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){    
        return( 
                <header className="header">                                    
                    <img src={"<%= image_tag 'logo.png' %>"} className="logo" />
                    <div className="header-right">
                        <a href="" className="active">Todas las juntas</a>
                        <a href="" className="active">Programar Junta</a>
                        <a href="" className="active">Home</a>
                        </div>
                </header>
        );
    }
}

Header.propTypes = {
    variable: PropTypes.string
};


export default Header