import React, { Component } from 'react'
import './Box.css'
export default class BoxColor extends Component {
  state = {
    counter: 1,
    appears: true,
    borderRadius: 0,
    colerRed: 1,
    colerGreen: 1,
    colerBlue: 1,

  }

  componentDidMount() {
    const interval = setInterval(() => {
      this.setState({
        colerRed: (Math.random() * 255),
        colerGreen: (Math.random() * 255),
        colerBlue: (Math.random() * 255),
        counter: this.state.counter + 1
      })
      if (this.state.counter >= 5) {
        this.setState({ borderRadius: 50});
        
      }
      if(this.state.counter>=20){
        this.setState({appears:false})
        clearInterval(interval)
      }
    }, 500);
  }


  render() {

    let boxstyle = {
      backgroundColor: `rgb(${this.state.colerRed}, ${this.state.colerGreen}, ${this.state.colerBlue})`,
      borderRadius: `${this.state.borderRadius}%`
    }
    return (
      <div>
        {this.state.appears && <div className="box" style={boxstyle}></div>}
      </div>
    )
  }
}
