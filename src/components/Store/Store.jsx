import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './Homepage'
import Nav from './Nav'
import Product from './Product'
import Products from './Products'
import './Store.css'

export class Store extends Component {
  render() {
    return (
      <Router>
        <Nav/>
        <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/Products' exact component={Products}/>
        <Route path='/Products/:id' component={Product} />
        </Switch>
      </Router>
    )
  }
}

export default Store
