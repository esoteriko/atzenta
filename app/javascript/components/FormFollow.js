import React from "react"

class FormFollow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            body: "",
						date: "",
						meeting_id: ""					
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
					<input type="text" name="meeting[follows_ups][body]" value={this.state.body} onChange={this.methodB}/>
					<input type="date" name="meeting[follows_ups][date]" value={this.state.date} onChange={this.methodD}/> 										          															
					
        </div>        
        );
    }
}

export default FormFollow