import React from "react";
import PropTypes from "prop-types";

class IndexA extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: this.props.article.title,
            body: this.props.article.body,
            var: this.props.article.var
        };
        
    }
    render(){
        return(
            <div>
                {this.state.articles.map((article)  => {
                    return(
                        <div key={article.id}>
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