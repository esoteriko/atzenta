import React from "react"

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