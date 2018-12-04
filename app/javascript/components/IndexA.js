import React from "react";
import PropTypes from "prop-types";

class IndexA extends React.Component{
    constructor(props){
        super(props);    
        
    }
    render(){
        return(
            <div>
                <h1>Articles</h1>
                {this.props.article.map((article)  => {
                    return(
                        <div>
                        <h3>{article.title}</h3>
                        <p>{article.body}</p>
                        <p>{article.var}</p>
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