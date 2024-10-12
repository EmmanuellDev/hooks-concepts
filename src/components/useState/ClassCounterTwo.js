import React, { Component } from 'react'

class ClassCounterTwo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    handleCountIncrease = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleCountDecrease = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    
    handleReset = () => {
        this.setState ({
            count: this.state.count = 0
        })
    }
  render() {
    return (
      <div>
        Count = {this.state.count}
        <button onClick={this.handleReset}>reset</button>
        <button onClick={this.handleCountIncrease}>increament</button>
        <button onClick={this.handleCountDecrease}>decreament</button>
      </div>
    )
  }
}

export default ClassCounterTwo
