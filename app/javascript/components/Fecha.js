import React from "react"

class Fecha extends React.Component{
	constructor(){
		super();
		this.state = {
			date: new Date(),
			months: ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
		};
	}
	render() {
		return(
			<div>
				<h2 className="date">{this.state.date.getDate()} de {this.state.months[this.state.date.getMonth()]} del {this.state.date.getFullYear()}</h2>
			</div>
		);
	}
}
export default Fecha
