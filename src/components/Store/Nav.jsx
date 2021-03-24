import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class Nav extends Component {
  render() {
    return (
      
      <div className="nav">
        <ul>
          <Link to="/">
          <li>Home</li>
          </Link>
          <Link to='/Products'>
          <li>Products</li>
          </Link>
        </ul>
      </div>
    )
  }
}

export default Nav
