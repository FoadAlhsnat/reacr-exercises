import React, { Component } from 'react'

export default class Butten extends Component {

  clicked=(e)=>{ 
    this.props.onClick(e.target.innerText)
  }
  render() {
    return (
      <div>
        <button onClick={this.clicked}>{this.props.color}</button>
      </div>
    )
  }
}
