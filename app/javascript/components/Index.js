import React from "react"
import PropTypes from "prop-types"
import { parse } from "ipaddr.js";

class Index extends React.Component {
  constructor(props){ 
    super(props); 
    this.state = {
      date: ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
    }       
  }  
  render () {
    return (
    	<div>
    	<h1 className="h">Juntas</h1>
      {this.props.meeting.map((m) => {        
        return(
          <div className="container" key={m.id}>
            <h4>{m.title}</h4>
            <p>{m.body}</p>
            <br/>
            <h4>resolucion:</h4><p>{m.purpose}</p>
            <h4>duracion:</h4><p>{m.duration}min</p>
            <h4>hora de inicio:</h4><p>{m.start_time[11]}{m.start_time[12]}{m.start_time[13]}{m.start_time[14]}{m.start_time[15]}hrs</p>
            <h4>hora de termino:</h4><p>{Math.trunc((( (m.start_time[11]+ m.start_time[12])* 60) + ((parseInt(m.start_time[14])*10)+ parseInt(m.start_time[15]))+ parseInt(m.duration))/60)}:
            {Math.round((((((m.start_time[11]+ m.start_time[12])* 60) + ((parseInt(m.start_time[14])*10)+ parseInt(m.start_time[15]))+ parseInt(m.duration))/60) - Math.trunc((( (m.start_time[11]+ m.start_time[12])* 60) + ((parseInt(m.start_time[14])*10)+ parseInt(m.start_time[15]))+ parseInt(m.duration))/60))*60)}hrs
            </p>
            <h4>date:</h4>
            <p>{m.schedule_date[8]}{m.schedule_date[9]} de {this.state.date[(parseInt(m.schedule_date[5])+ parseInt(m.schedule_date[6])-1)]} del {m.schedule_date[0]}{m.schedule_date[1]}{m.schedule_date[2]}{m.schedule_date[3]}
            </p>
            <p>{m.follow_ups}</p>
            
            </div>            
        )
      })}                       
        <br/>  
      </div>

    );
  }
}

Index.propTypes = {
  junta: PropTypes.string
};

export default Index
