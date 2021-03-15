import React, { Component } from 'react'


class Btn extends Component {
  constructor() {
    super()
    this.state = { count:0 }
    this.Handelclick=this.Handelclick.bind(this)
  }

  Handelclick() {
    this.setState({ count: ++this.state.count })
  }

  render() {
    return <div><button onClick={this.Handelclick}>click me</button>{this.state.count}</div> 
  }
}

export default Btn