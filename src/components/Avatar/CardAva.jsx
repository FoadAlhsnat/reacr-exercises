import React, { Component } from 'react'

export class CardAva extends Component {
  render() {
    return (
      <div className="avatarcard">
        <div className="username">
          {
            this.props.fname + ' ' + this.props.lname
          }
        </div>
        <div><img src={this.props.src}></img></div>
      </div>
    )
  }
}

export default CardAva
