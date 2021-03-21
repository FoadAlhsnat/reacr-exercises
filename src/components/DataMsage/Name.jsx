import React, { Component } from 'react'

export class Name extends Component {
  state={
    names:this.props.names
  }
  componentDidUpdate(prevPrpos){
    if(prevPrpos.names.length!==this.props.names.length){
      this.setState({names:this.props.names})
    }
  }
  render() {
    return (
      <div>
        {
          this.state.names.map((name,i)=>{
            return <p key={i}>{name}</p>
          })
        }
      </div>
    )
  }
}

export default Name
