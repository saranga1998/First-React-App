import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName : 'Parent'
      }

      this.GreetParaent = this.GreetParaent.bind(this)
    }

    GreetParaent(abc){
        alert(`Hello ${this.state.parentName} from ${abc}`)
    }
    
  render() {
    return (
      <div>
        <ChildComponent GreetHandler ={this.GreetParaent}/>
      </div>
    )
  }
}

export default ParentComponent

