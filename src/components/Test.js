import React, { Component } from 'react'

class Test extends Component {
  constructor(props) {
    super(props)

    this.state = {
      greet: 'hello'
    }
    this.changeGreet = this.changeGreet.bind(this);
  }

  changeGreet() {
    console.log(this);
    this.setState({
      greet: 'YO BRO AFRO !!'
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.greet}</h2>
        <button onClick={this.changeGreet}>click to change greetings</button>
      </div>
    )
  }
}

export default Test
