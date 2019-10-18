import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Display extends Component {

  render() {
    return (
      <div>
        {this.props.calculationResult}
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
