import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class Products extends Component {
  render() {
    return (
      <div>
        <ul>
          <Link to='/Products/1'>
          <li>style</li>
          </Link>
          <Link to='/Products/2'>
          <li>jens</li>
          </Link>
          <Link to='/Products/3'>
          <li>tie</li>
          </Link>
        </ul>
      </div>
    )
  }
}

export default Products
