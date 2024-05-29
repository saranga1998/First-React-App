import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandlertwo() {
        console.log('Hi')
    }
  render() {
    return (
      <div>
      
        <button onClick={this.clickHandlertwo}>Click You</button>
      </div>
    )
  }
}

export default ClassClick
