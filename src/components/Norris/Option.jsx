import React, { Component } from 'react'

export class Option extends Component {
  render() {
    return (
      <option value={this.props.value}>{this.props.value}</option>
    )
  }
}

export default Option
