import React from "react"

class IndexW extends React.Component {
    constructor(){
        super();
        this.state = {
            numero: "",
            resultado: ""
        };
        this.RandomNumber = this.RandomNumber.bind(this);    
    }
    RandomNumber(){
        this.setState({numero:  Math.floor(Math.random() * 10 + 1)})
        if (this.state.numero >=5){
            this.setState({resultado: "Pista de Hielo"})
        }else{
            this.setState({resultado: "Cineteca"})
        }
    }
    render(){
        return(
            <div className="container">
            <h1 className="h">Juntas</h1>
            <div>
                <h2 className="h">Juntas programadas</h2>
                <button onClick={this.RandomNumber}>decide</button>      
                {this.state.resultado}
            </div>
            </div>
        );
    }
}

export default IndexW