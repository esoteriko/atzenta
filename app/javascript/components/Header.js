import React from "react";
import PropTypes from "prop-types";
class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){    
        return( 
            <div className="header">                                                        
              <div className="header-right">
							  <a><img src={"<%= image_tag 'logo.png', :alt => 'rss feed' %>"}/></a>
                <a href="" className="active">Todas las juntas</a>
                <a href="" className="active">Programar Junta</a>
                <a href="" className="active">Home</a>
								<a href={"<%= link_to 'F', root_path %>"} className="active">F</a>
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