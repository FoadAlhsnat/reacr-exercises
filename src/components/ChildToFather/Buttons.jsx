import React, { Component } from 'react'
import Butten from './Butten'

const colors = ['blue', 'red', 'yellow'];
export default class Buttons extends Component {
  state = { color: "" }
  onClickBtn = (x) => {
      
      this.setState({color:x})
  }
  render() {
    return (
      <div>
        {
          colors.map((color) => <Butten onClick={this.onClickBtn} color={`${color}`} />)
        }
        <h1>the color selected is:{this.state.color}</h1>
      </div>
    )
  }
}
