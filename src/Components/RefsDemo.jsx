import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
    
      this.inputRefs = React.createRef()
      this.cbRefs = null
      this.setcbRefs = element =>  {
        this.cbRefs = element
      }
    }
    
    componentDidMount(){
        if(this.cbRefs){
            this.cbRefs.focus()
        }
        // this.inputRefs.current.focus()
        // console.log(this.inputRefs)
    }

    clickHandler = () => {
        alert(this.inputRefs.current.value)
    }
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRefs}/>
        <input type='text' ref={this.setcbRefs}/>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}

export default RefsDemo
