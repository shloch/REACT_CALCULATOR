import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class Apps extends Component {
  render() {
    return (
      <div>
        <Display />
        <ButtonPanel />
      </div>
    )
  }
}

export default Apps
