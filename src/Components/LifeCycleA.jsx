import React, { Component } from 'react'

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
    }

    componentDidMount(){
        console.log('LifeCycleA Component Did mount')
    }
    
  render() {
    console.log('LifeCycleA render')
    return (
      <div>
        LifeCycle A
      </div>
    )
  }
}

export default LifeCycleA
