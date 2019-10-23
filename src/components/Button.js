import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {

  handleClick = (buttonName) => {
    return this.props.clickHandler(buttonName);

  }
  render() {
    const wideStyle = (this.props.wide) ? 'wideStyle' : '';
    return (
      <button
        className={wideStyle}
        id='button-component'
        style={{ backgroundColor: this.props.color }}
        onClick={() => this.props.clickHandler(this.props.name)}>

        {this.props.name}
      </button>
    )
  }
}

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string
};

Button.defaultProps = {
  color: 'orange'
};

export default Button
