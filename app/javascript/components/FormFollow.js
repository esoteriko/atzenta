import React from "react"

class FormFollow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            body: this.props.follow_up.body,
            date: this.props.follow_up.date						
			};				
      this.methodB = this.methodB.bind(this)        			
      this.methodD = this.methodD.bind(this)
	 }	
  methodB(event){
		this.setState({body: event.target.value});
  } 
  methodD(event){
		this.setState({date: event.target.value});
  } 	 	

    render(){
        return(
				<div className="container">
            <h1 className="h">Juntas</h1>
						<div>					          					
					<input type="text" name="follow_up[body]" value={this.state.body} onChange={this.methodB}/>
					<input type="date" name="follow_up[date]" value={this.state.date} onChange={this.methodD}/> 					
          <input type="submit" value="Update Post" />										
            </div>
        </div>
        );
    }
}

export default FormFollow