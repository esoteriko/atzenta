import React from "react";

class Menu extends Component {
  constructor(props){
    super(props);
  }
    render() {
      return (
        <div>
          <button>
            Show menu
          </button>
          
          <div className="menu">
            <button> Menu item 1 </button>
            <button> Menu item 2 </button>
            <button> Menu item 3 </button>
          </div>
        </div>
      );
    }
  }

  export default Menu;