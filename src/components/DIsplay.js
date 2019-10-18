import React, { Component } from 'react'

class Display extends Component {
  constructor(props) { }

  render() {
    return (
      <div>
        {this.props.calculationResult || '0'}
      </div>
    )
  }
}

export default Display
