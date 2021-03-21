import React, { Component } from 'react'

export class joke extends Component {
  render() {
    return (
      <div>
        {
          this.props.joke
        }
      </div>
    )
  }
}

export default joke
