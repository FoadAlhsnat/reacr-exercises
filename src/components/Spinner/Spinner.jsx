import React, { Component } from 'react'
import './Spinner.css'
export default class Spinner extends Component {
  state={activ:true,}

  componentDidMount(){
    setTimeout(() => {
      this.setState({activ:false})
      
    }, 2000);

    //return clearTimeout(team)
  }

  render() {
    return (
      // <div className="loader">
        
      // </div>
      this.state.activ?<div className="loader"></div>:null
    )
  }
}
