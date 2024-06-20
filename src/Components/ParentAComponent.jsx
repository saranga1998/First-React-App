import React, { Component } from 'react'
import RegComponent from './RegComponent'
import PureCompo from './PureCompo'
import MemoCompo from './MemoCompo'

class ParentAComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Saranga'
      }
    }

    componentDidMount(){
      setInterval(()=>{
        this.setState({
          name:'Saranga'
        })
      },2000)
    }
    
  render() {
    console.log('Parent Component')
    return (
      <div>
        Parent Component
        <MemoCompo name={this.state.name}/>
        {/* <RegComponent name={this.state.name}/>
        <PureCompo name={this.state.name}/> */}
      </div>
    )
  }
}

export default ParentAComponent
