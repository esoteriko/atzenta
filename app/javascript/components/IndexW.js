import React from "react"

class IndexW extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.article.title,
            body: this.props.article.body,
            var: this.props.article.var			     
		  };	         
	 }
	 methodT(event){
		this.setState({title: event.target.value});
  }
  methodB(event){
		this.setState({body: event.target.value});
  }
  methodV(event){
		this.setState({var: event.target.value});
  }	 	
    render(){
        return(
            <div className="container">
            <h1 className="h">Juntas</h1>
            <div>
					<input type="text" name="article[title]" value={this.state.title} onChange={this.methodT}/> 
                    <input type="text" name="article[body]" value={this.state.body} onChange={this.methodB}/>
                    <input type="text" name="article[var]" value={this.state.var} onChange={this.methodV}/>               
                    <input type="submit" value="Update Post"/>
            </div>
            </div>
        );
    }
}

export default IndexW