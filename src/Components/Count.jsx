import React, { Component } from 'react'

class Count extends Component {

    constructor(){
        super()
        this.state = {
            count: 0
            }
            
    }

    // Add(){
    //     this.setState(
    //         {
    //             count: this.state.count + 1
    //         }
    //     )
    // }


    Add(){
        this.setState(preveState=>({
            count: preveState.count + 1
        }))
    }

    Sub(){
        this.Add()
        this.Add()
        this.Add()
    }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        {/* <button onClick={() => this.Add()}>Add</button> First step*/}
        <button onClick={() => this.Sub()}>Add</button>
      </div>
    )
  }
}

export default Count