import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username :'',
         comments :'',
         topic :'react'
      }
    }
    
    handleusernameChange = (event) =>{
        this.setState({
            username:event.target.value
        })
    }

    handleCommentChange =(event) =>{
        this.setState({
            comments:event.target.value
        
        })
    }

    handletopicChange =(event) =>{
        this.setState({
            topic:event.target.value
        })
    }

    handleSubmit = (event) =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

  render() {
    const {username,topic,comments} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
      <div>
            <h1>My Form Component </h1>
      </div>
        <div>
            <label>Username :</label>
            <input type="text" value={username} onChange={this.handleusernameChange}/>
        </div>
        <div>
            <label>Comment :</label>
            <textarea type="text" value={comments} onChange={this.handleCommentChange} />
        </div>

        <div>
            <label>Topic :</label>
            <select value={topic} onChange={this.handletopicChange}>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                <option value="Vue">Vue</option>
            </select>
        </div>

        <div><button type='submit'>Submit</button></div>
      </form>
    )
  }
}

export default Form
