import React, { Component } from 'react'

export class TextArea extends Component {
  textAreaRef=React.createRef()
  state={
    text:''
  }
  onClick=(e)=>{
    //document.getElementById('text').select()
    this.textAreaRef.current.select()
    console.log(this.textAreaRef.current);
    document.execCommand("copy")
    
  }
  render() {
    return (
      <div>
        <textarea ref={this.textAreaRef} name="text" id="text" cols="30" rows="10"></textarea>
        <button onClick={this.onClick}>Copy</button>
      </div>
    )
  }
}

export default TextArea
