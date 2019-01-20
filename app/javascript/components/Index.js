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
            <h5>Descripcion:</h5><p className="a">{m.body}</p>            
            <h5>Resolucion:</h5><p className="a">{m.purpose}</p>

            <div className="list">
              <p className="a"><strong>duracion:</strong>{m.duration}min</p>
              <p className="a"><strong>Hora de inicio: </strong>{m.start_time}</p>
              <p className="a"><strong>Hora de termino: </strong>            </p>
              <p className="a"><strong>Date:</strong>{m.schedule_date}</p>
              <a href={"/meetings/"+ this.propsm.m.id}>Show</a>
              <a href={"/meetings/"+ this.props.m.id+"/edit"}>edit</a>
              <a data-confirm="are you sure" data-method="delete" href={"/meetings"+ this.props.m.id}></a>
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

Index.propTypes = {
  junta: PropTypes.string
};

export default Index
