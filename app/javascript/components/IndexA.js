import React from "react";
import PropTypes from "prop-types";

class IndexA extends React.Component{
    constructor(props){
        super(props);    
        
    }
    render(){
        return(
            <div>
             <h1 className="titulo">Articles</h1>
             {this.props.article.map((article)  => {
							 return(
							 <div>
								 <table>
									 <tr>
									 <th>Titulo:</th> <th>Cuerpo:</th> <th>Var:</th>
									 </tr>
									 <tr>
									 <td>{article.title}</td><td>{article.body}</td><td>{article.var}</td>
									 </tr>									 
									</table>
                </div>										
                )
                })}
            </div>
        );
    }
}
IndexA.propTypes = {
    variable : PropTypes.string
}
export default IndexA

