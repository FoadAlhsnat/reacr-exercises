import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
export class Product extends Component {
    state={
      id:null,
      arr:[
        {
          name:'hi',
          price:'10$',
          src:"https://media.kohlsimg.com/is/image/kohls/sl-denim-mens-hs-20200706-jeans-visnav-05?scl=1&fmt=pjpeg"
        },
        {
          name:'foad',
          price:'20$',
          src:'osama'
        }
      ]
    }
    componentDidMount(){
      this.setState({id: this.props.match.params.id}) 
    }
  render() {
    return (
      <div>
        {
          this.state.id?<div><h1>{this.state.arr[this.state.id-1].name}</h1></div>:<></>
        }
        { 
          // this.state.id?<h1>{this.state.id}</h1>:<div></div>
          <h1>{this.state.id}</h1>

        }
      </div>
    )
  }
}

export default Product
