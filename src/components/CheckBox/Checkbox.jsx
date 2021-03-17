import React, { Component } from 'react'

export default class Checkbox extends Component {
  // state={
  //   checked:true
  // }
  // switchcheck=()=>{
  //   this.setState({checked:!this.state.checked})
  //   console.log(this.state);

  // }
  render() {
    return (
      <div>
        <input type="checkbox"  onClick={this.switchcheck}/>hi
      </div>
    )
  }
}
