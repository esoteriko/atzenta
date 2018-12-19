import React from "react"

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.meeting.title,
            body: this.props.meeting.body,
						schedule_date: this.props.meeting.schedule_date,
						purpose: this.props.meeting.purpose,
						duration: this.props.meeting.duration,
						start_time: this.props.meeting.start_time
			};	
			this.methodT = this.methodT.bind(this)
			this.methodB = this.methodB.bind(this)        
			this.methodS = this.methodS.bind(this)
			this.methodP = this.methodP.bind(this)
			this.methodD = this.methodD.bind(this)
			this.methodT = this.methodT.bind(this)
	 }
	 methodT(event){
		this.setState({title: event.target.value});
  }
  methodB(event){
		this.setState({body: event.target.value});
  }
  methodS(event){
		this.setState({schedule_date: event.target.value});
	}	 	
	methodP(event){
		this.setState({purpose: event.target.value});
	}	 	
	methodD(event){
		this.setState({duration: event.target.value});
	}	 	
	methodT(event){
		this.setState({start_time: event.target.value});
	}	 	

    render(){
        return(
				<div className="container">
            <h1 className="h">Juntas</h1>
						<div>
					<input type="text" name="meeting[title]" value={this.state.title} onChange={this.methodT}/> 
          <input type="text" name="meeting[body]" value={this.state.body} onChange={this.methodB}/>					
					<input type="date" name="meetinf[schedule_date]" value={this.state.schedule_date} onChange={this.methodS}/> 
					<input type="text" name="meeting[purpose]"value={this.state.purpose} onChange={this.methodP}/>
					<input type="number" name="meeting[duration]" value={this.state.duration} onChange={this.methodD}/>
					<input type="time" name="meeting[start_time]" value={this.state.start_time} onChange={this.methodT}/>                 
          <input type="submit" value="Update Post" />					
            </div>
        </div>
        );
    }
}

export default Form