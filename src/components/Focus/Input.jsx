import React, { Component } from 'react'

export class input extends Component {
  inputRef=React.createRef();
  componentDidMount(){
    this.inputRef.current.focus()
  }
  render() {
    return (
      <div>
        <input ref={this.inputRef} type={'text'}/>
      </div>
    )
  }
}

export default input
