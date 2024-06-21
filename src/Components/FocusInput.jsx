import React, { Component } from 'react'
import Iput from './Iput'
class FocusInput extends Component {
    constructor(props) {
        super(props)
      
        this.componentRef = React.createRef()
      }
      
  
      clickHandler = () => {
        this.componentRef.current.focusInput()
      }
  render() {
  
    return (
      <div>
        
        <Iput ref={this.componentRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput
