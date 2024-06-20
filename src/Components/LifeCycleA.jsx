import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Saranga'
      }
      console.log('LifeCycleA constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleA Component Did mount')
    }

    shouldComponentUpdate(){
      console.log('LifeCycleA shouldComponentUpdate')
      return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log('LifeCycleA getSnapshotBeforeUpdate')
      return null
     }

    componentDidMount(){
      console.log('LifeCycleA componentDidMount')
      
     }

    changeState =() =>{
      this.state({
        name : 'Saranga'
      })
    }
  render() {
    console.log('LifeCycleA render')
    return (
      <div>
        <div>LifeCycle A</div>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB/>
      </div>
    )
  }
}

export default LifeCycleA
