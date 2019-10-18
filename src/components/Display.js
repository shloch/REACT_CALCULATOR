import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Display extends Component {

  render() {
    return (
      <div id="display-component">
        <div className="calculationResult">{this.props.calculationResult}</div>
      </div>
    )
  }
}

Display.propTypes = {
  calculationResult: PropTypes.string

};
Display.defaultProps = {
  calculationResult: '0'
};

export default Display