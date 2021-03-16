import React, { Component } from 'react'
import './style.css'
export default class ChangingBox extends Component {

  state = { boxAppears: false };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ boxAppears: true });
    }, 1000);
    setTimeout(() => {
      this.setState({ boxAppears: false });
    }, 4000);
  }

  render() {
    let boxStyle = {
      height: this.props.size,
      width: this.props.size,
      backgroundColor: this.props.color,
      top: this.props.top,
    }

    return (
      <div>
        {this.state.boxAppears && <div className="box" style={boxStyle}></div>}
      </div>
    )
  }
}
