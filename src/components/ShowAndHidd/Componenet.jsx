import React, { Component } from 'react'
import './style.css'

 class Show extends Component {
  constructor() {
    super()
    this.state = { class: 0, classname: 'show' }
   // this.Handelclick = this.Handelclick.bind(this)
  }

  changeclass=()=> {
    if (this.state.class) {

      this.setState({ class: 0, className: 'show' })
    }
    else {
      this.setState({ class: 1, className: 'hidd' })
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.changeclass}>hidd/show</button>
        <div className={this.state.className||'show'}></div>
      </div>
    )
  }
}

export default Show