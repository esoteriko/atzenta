import React from "react"
import PropTypes from "prop-types"
class Index extends React.Component {
  render () {
    return (
      <React.Fragment>
        Junta: {this.props.junta}
      </React.Fragment>
      
    );
  }
}

Index.propTypes = {
  junta: PropTypes.string
};
export default Index
