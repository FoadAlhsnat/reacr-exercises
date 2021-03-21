import React, { Component } from 'react'
import Card from './Card'
import Data from './Data'
import Name from './Name'

export class DataMsage extends Component {
  state = {
    Data: Data,
    names: [],
    olds: []
  }

  getAllName = () => {
    let names = []
    this.state.Data.map(obj => names.push(obj.name))
    this.setState({ names: names })
  }

  getOld() {
    let Olds = []
    this.state.Data.map(obj => {
      if (Number(obj.birthday[obj.birthday.length - 2]) < 9) {
        return Olds.push(obj)
      }
    })
    this.setState({ olds: Olds })
  }
  componentDidMount() {
    this.getOld()
    this.getAllName()
  }


  render() {
    return (
      <div>
        <Name names={this.state.names}/>
        <Card old={this.state.olds}/>
      </div>
    )
  }
}

export default DataMsage
