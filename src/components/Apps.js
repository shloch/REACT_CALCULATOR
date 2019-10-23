import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class Apps extends Component {
  constructor(props) {
    super(props)

    this.state = {
      total: null,
      next: null,
      operation: null
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (buttonName) => {
    const { total, next, operation } = calculate(this.state, buttonName);
    this.setState({
      total: total,
      next: next,
      operation: operation
    })
  }

  render() {
    const { total, next } = this.state;
    const display = total || next;
    return (
      <div id='app-component'>
        <Display calculationResult={display} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    )
  }
}

export default Apps
