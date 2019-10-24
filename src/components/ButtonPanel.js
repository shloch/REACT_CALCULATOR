import React, { Component } from 'react';
import Button from './Button';

class ButtonPanel extends Component {



  render() {
    const clickHandler = this.props.clickHandler;
    return (
      <div id="buttonPanel-component">
        <div id='group-1'>
          <Button name='AC' color='#F7F7FF' clickHandler={clickHandler} />
          <Button name='+/-' color='#F7F7FF' clickHandler={clickHandler} />
          <Button name='%' color='#F7F7FF' clickHandler={clickHandler} />
          <Button name='/' clickHandler={clickHandler} />
        </div>
        <div id='group-2'>
          <Button name='7' color='#F7F7FF' clickHandler={clickHandler} />
          <Button name='8' color='#F7F7FF' clickHandler={clickHandler} />
          <Button name='9' color='#F7F7FF' clickHandler={clickHandler} />
          <Button name='x' clickHandler={clickHandler} />
        </div>
        <div id='group-3'>
          <Button name='4' color='#F7F7FF' clickHandler={clickHandler} />
          <Button name='5' color='#F7F7FF' clickHandler={clickHandler} />
          <Button name='6' color='#F7F7FF' clickHandler={clickHandler} />
          <Button name='-' clickHandler={clickHandler} />
        </div>
        <div id='group-4'>
          <Button name='1' color='#F7F7FF' clickHandler={clickHandler} />
          <Button name='2' color='#F7F7FF' clickHandler={clickHandler} />
          <Button name='3' color='#F7F7FF' clickHandler={clickHandler} />
          <Button name='+' clickHandler={clickHandler} />
        </div>
        <div id='group-5'>
          <Button name='0' wide={true} color='#F7F7FF' clickHandler={clickHandler} />
          <Button name='.' color='#F7F7FF' clickHandler={clickHandler} />
          <Button name='=' clickHandler={clickHandler} />
        </div>
      </div>
    )
  }
}

export default ButtonPanel
