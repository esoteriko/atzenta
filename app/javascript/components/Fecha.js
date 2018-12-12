import React from "react"

<<<<<<< HEAD
class Fecha extends React.Component {
  constructor(){
    super();
    this.state ={
      date: new Date(),
      meses: ["Enero", "Febrero", "Marzo", "Abril","Mayo",
      "Junio","Julio","Agosto","Semptiembre","Octubre","Nomviembre","Diciembre"],
    };
  }
  render() {
    return(
      <div>
        <h2 className="fecha">{this.state.date.getDate()} de {this.state.meses[this.state.date.getMonth()]} del {this.state.date.getFullYear()}</h2>
      </div>
    );
  }
}

export default Fecha
=======
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
>>>>>>> b7840b40361c8f899c12b72cb768206225f37156
