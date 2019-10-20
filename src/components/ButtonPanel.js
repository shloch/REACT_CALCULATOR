import React, { Component } from 'react';
import Button from './Button';

class ButtonPanel extends Component {

  render() {
    const buttonColor = '#F7F7FF';
    return (
      <div id="buttonPanel-component">
        <div id='group-1'>
          <Button name='AC' color='{buttonColor}' />
          <Button name='+/-' color='{buttonColor}' />
          <Button name='%' color='{buttonColor}' />
          <Button name='/' />
        </div>
        <div id='group-2'>
          <Button name='7' color='{buttonColor}' />
          <Button name='8' color='{buttonColor}' />
          <Button name='9' color='{buttonColor}' />
          <Button name='X' />
        </div>
        <div id='group-3'>
          <Button name='4' color='{buttonColor}' />
          <Button name='5' color='{buttonColor}' />
          <Button name='6' color='{buttonColor}' />
          <Button name='-' />
        </div>
        <div id='group-4'>
          <Button name='1' color='{buttonColor}' />
          <Button name='2' color='{buttonColor}' />
          <Button name='3' color='{buttonColor}' />
          <Button name='+' />
        </div>
        <div id='group-5'>
          <Button name='0' wide={true} color='{buttonColor}' />
          <Button name='.' color='{buttonColor}' />
          <Button name='=' />
        </div>
      </div>
    )
  }
}

export default ButtonPanel
