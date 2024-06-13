import React, { Component } from 'react'

export class UserGretting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : false
      }
    }
    
  render() {
    return(
        this.state.isLoggedIn ? (
            <div>Hello User</div>
        ) : (
            <div>Hello Guest</div>
        )
    )
    // let massage 

    // if(this.state.isLoggedIn){
    //     massage = <div>Hello User</div>
    // }
    // else{
    //     massage = <div>Hello Guest</div>
    // }

    // return (
    //   <div>
    //     {massage}
    //   </div>
    // )
  }
}

export default UserGretting
