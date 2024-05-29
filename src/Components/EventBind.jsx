import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
            message : "Hello"
      }
    }

    clickHandlerthree() {
        this.setState({
            message: 'Goodbye'
        })
    }
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandlerthree.bind(this)}>Click Me</button>
      </div>
    )
  }
}

export default EventBind
