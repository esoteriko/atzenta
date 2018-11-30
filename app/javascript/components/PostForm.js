import React from "react"
//import PropTypes from "prop-types"
class PostForm extends React.component{
constructor(props){
    super(props);
    this.state = {
        title: props.article.title,
        content: props.article.body,
        var: props.article.var
    };
    this.methodT = this.methodT.bind(this);
    this.methodB = this.methodB.bind(this);
    this.methodV = this.methodV.bind(this);
}
methodT(e){
    this.setState({title: e.target.value});
}
methodB(e){
    this.setState({body: e.targer.value});
}
methodV(){
    this.setState({var: e.target.value});
}
render(){
    return(
        <div>
            <h2>Title</h2>
            <input type="text" name="article[title]" value={this.state.title} onChange={this.methodT}/>
            <br/>
            <h2>body</h2>
            <input type="text" name="article[body]" value={this.state.body} onChange={this.methodB}/>
            <br/>
            <h2>Var</h2>
            <input type="text" name="article[var]" value={this.state.var} onChange={this.methodV}/>
            <input tyoe="submit" value="Update Post"/>
        </div>
    );
}
}