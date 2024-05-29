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
        {/* <button onClick={this.clickHandlerthree.bind(this)}>Click Me</button> */}
        <button onClick={()=>this.clickHandlerthree()}>Click Here</button>
      </div>
    )
  }
}

export default EventBind
