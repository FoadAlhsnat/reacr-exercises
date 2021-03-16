import React, { Component } from 'react'

export default class LifeCycle extends Component {
  constructor(){
    super()
    this.state={favoriteColor:'blue'}
  }

  componentDidMount= ()=>{
    setTimeout(()=>this.setState({favoriteColor:'red'}),1000)
    
  }

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
      </div>
    )
  }
}
