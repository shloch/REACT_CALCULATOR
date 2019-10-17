import React, { Component } from 'react'

class Display extends Component {
  render() {
    return (
      <div>
        {this.props.calculationResult}
      </div>
    )
  }
}

export default Display
