import React from "react"

class IndexW extends React.Component {
    constructor(){
        super();
        this.state = {
            numero: Math.floor(Math.random() * 10 + 1),
            resultado: ""
        };
        this.RandomNumber = this.RandomNumber.bind(this);    
    }
    RandomNumber(){
        if(this.state.numero <= 5){
            this.setState({resultado: "Pista de Hielo"})
            this.setState({numero: Math.floor(Math.random() *10 +1)})
        }else{
            this.setState({resultado: "Cineteca"})
            this.setState({numero: Math.floor(Math.random() *10 +1)})
        }
    }
    render(){
        return(
            <div className="container">
            <h1 className="h">Juntas</h1>
            {this.state.numero}
            <div>
                <h2 className="h">Juntas programadas</h2>
                <button onClick={this.RandomNumber}>decide</button>
                <h2>El resultado es : {this.state.resultado}
                </h2>
            </div>
            </div>
        );
    }
}

export default IndexW