import React from "react"
import PropTypes from "prop-types"
class Index extends React.Component {
  constructor(props){ 
    super(props);
    this.state = {
      name: this.props.junta,
      validate: false,
      showMenu: false,
      date: new Date()   
    };
    this.method = this.method.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  method() {
    if(this.state.validate == false){
    this.setState({name: "no"});
    this.setState({validate: true});
    }
    else{
      this.setState({name: "si"});
      this.setState({validate: false});
    }
  }
  showMenu(event){
    event.preventDefault();
    this.setState({showMenu: true}, () => {
      document.addEventListener('click', this.closeMenu);});
  }
  closeMenu(event){
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
}
  }
  render () {
    return (
    	<div>
        <h1 className="date">{this.state.date.getDate()}/{this.state.date.getMonth() + 1}/{this.state.date.getFullYear()}</h1>
    	<h2>clickea</h2>
        <button onClick={this.method}>accion</button>
        <h2>{this.state.name}</h2>         
        <br/>  
        <div>
          <button onClick={this.showMenu}>
            Show menu
          </button>
          {this.state.showMenu?(
            <div className="menu" ref={(element) => {
              this.dropdownMenu = element;}}>
            <button> Menu item 1 </button>
            <button> Menu item 2 </button>
            <button> Menu item 3 </button>
          </div>
          ) : (null)}
          
        </div>    
      </div>

    );
  }
}

Index.propTypes = {
  junta: PropTypes.string
};

export default Index
