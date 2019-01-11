import React from "react"

class FormFollow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            body: this.props.follow_up.body,
						date: this.props.follow_up.date,
						meeting_id: this.props.follow_up.meeting_id					
			};				
      this.methodB = this.methodB.bind(this)        			
			this.methodD = this.methodD.bind(this)
			this.methodM = this.methodM.bind(this)	
	 }	
  methodB(event){
		this.setState({body: event.target.value});
  } 
  methodD(event){
		this.setState({date: event.target.value});
	} 
	methodM(event){
		this.setState({meeting_id: event.target.value});
	}	 	

    render(){
        return(				
				<div>					          					
					<input type="text" name="follow_up[body]" value={this.state.body} onChange={this.methodB}/>
					<input type="date" name="follow_up[date]" value={this.state.date} onChange={this.methodD}/> 										          										
        </div>        
        );
    }
}

export default FormFollow