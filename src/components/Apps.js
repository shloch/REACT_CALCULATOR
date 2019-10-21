import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class Apps extends Component {
  render() {
    return (
      <div id='app-component'>
        <Display />
        <ButtonPanel />
      </div>
    )
  }
}

export default Apps
