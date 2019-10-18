import React, { Component } from 'react';
import PropTypes from 'prop-types';

let defaultBgColor = {
  backgroundColor: 'orange'
};


class Button extends Component {
  render() {
    const wideStyle = (this.props.wide) ? 'wideStyle' : '';
    let bgColor;
    if (!this.props.color) {
      bgColor = defaultBgColor;
    } else {
      bgColor = { backgroundColor: this.props.color };
    }
    return (
      <button className={`${wideStyle}`} id='button-component' style={bgColor}>
        {this.props.name}
      </button>
    )
  }
}

Button.propTypes = {
  name: PropTypes.string

};

export default Button
