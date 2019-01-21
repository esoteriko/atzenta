import React from "react";
import Moment from "moment-timezone";

class ShowM extends React.Component{
    constructor(props){
				super(props);				           
		}		
    render(){
			let m,f,follow_ups_any,follow,a;

			follow_ups_any = this.props.follow_ups_any;
			m = this.props.meeting;
			f = this.props.follow_ups;
			a=1;

			if (follow_ups_any){
				follow = f.map((f) =>{return(
					<div>
					  <ul><p>{a++}</p>
						<li><strong>Resolucion</strong>{f.body}</li>
						<li><strong>Fecha </strong>{f.date}</li>
						</ul>
					</div>
				)})
			}
			else{
				follow  = <p>No hay</p>
			}

      return(
        <div>
				<div className="list">				
				<p><strong>Titulo:</strong>{m.title}</p>
				<p><strong>User:</strong>{this.props.user}</p>
				<p><strong>Body:</strong>{m.body}</p>
				<p><strong>Date:</strong>{Moment(m.schedule_date).format('MMM Do YY')}</p>
				<p><strong>Hora de Inicio:</strong>{Moment(m.start_time).utc().format('HH:mm')}Hrs</p>
				<p><strong>Propuesta:</strong>{m.purpose}</p>
				<br/>				
				<p><strong>Duration:</strong>{m.duration}min</p>
				<p><strong>Hora de termino: </strong>{Moment(m.start_time).utc().add(m.duration, 'minutes').format('HH:mm')}Hrs</p>
				{follow}
				<p><a href={this.props.url+"/"+m.id+"/edit"}>Editar</a>|<a href={this.props.url}>Atras</a></p>
				</div>
        </div>
      );
    }
}

export default ShowM


