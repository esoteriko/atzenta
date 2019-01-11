import React from "react"
import PropTypes from "prop-types"

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
            <p>titulo: {m.title}</p><p>body: {m.body}</p><p>date: {m.schedule_date}</p>
            <p>resolucion: {m.purpose}</p><p>duracion: {m.duration}hrs</p>
            <p>hora de inicio: {m.start_time}</p>
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
