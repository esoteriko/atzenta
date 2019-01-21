import React from "react";
import Moment from "moment-timezone";

class Index extends React.Component {
  constructor(props){
    super(props);           
  }  
  render () {
    return (
    	<div>
    	<h1 className="h">Juntas</h1>
      {this.props.meeting.map((m) => {        
        return(
          <div className="container" key={m.id}>
            <h4>{m.title}</h4>
            <h4>{m.body}</h4>            
            <div className="list">
            <p className="a"><strong>Date:</strong>{Moment(m.schedule_date).format('MMM Do YY')}</p>
            <p className="a"><strong>Hora de inicio: </strong>{Moment(m.start_time).utc().format('HH:mm')}Hrs</p>
            <p className="a">{m.purpose}</p>            
            <p className="a"><strong>duracion:</strong>{m.duration}min</p>              
            <p className="a"><strong>Hora de termino: </strong>{Moment(m.start_time).utc().add(m.duration, 'minutes').format('HH:mm')}</p>              
            <p className="a"><strong>dd:</strong>{m.follow_ups}</p>
            <p className="a"><a href={"/meetings/"+ m.id}>Ver</a>|
            <a href={"/meetings/"+ m.id+"/edit"}>Editar</a>|
            <a data-confirm="are you sure" data-method="delete" href={"/meetings/"+m.id}>Eliminar</a>
            </p>              
            </div>                                                    
            <p className="a">{m.follow_ups}</p>            
            </div>            
        )
      })}                       
        <br/>  
      </div>

    );
  }
}
export default Index
