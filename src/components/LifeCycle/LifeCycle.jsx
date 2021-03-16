import React, { Component } from 'react'

export default class LifeCycle extends Component {
  constructor() {
    super()
    this.state = { favoriteColor: 'blue' }
  }

  componentDidMount = () => {
    const div = document.getElementById('red')
    // setTimeout(() =>
    //   this.setState({ favoriteColor: 'red' }
    //   ), 1000)

      setTimeout(()=>{
        this.setState({ favoriteColor: 'red' })
        div.innerText=`the updated favorite color is${this.state.favoriteColor}`
      },1000)
  }

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <div>
          <h1 id="red"></h1>

        </div>
      </div>
    )


  }
}
