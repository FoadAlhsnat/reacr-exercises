import React, { Component } from 'react'
import axios from 'axios'
import Card from './CardAva'
export class Avatar extends Component {
  state = {
    persons: [],
    filterarr: []
  }
  async componentDidMount() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      const res = await axios.get('https://randomuser.me/api/');
      arr.push(res.data.results[0])
    }
    this.setState({
      persons: arr,
      filterarr: arr
    })
    console.log(arr);
  }

  handlerchange = (e) => {
    let arr = []
    this.state.persons.map(p => {
      if (p.name.first.toLowerCase().includes(e.target.value.toLowerCase()))
        arr.push(p)
    })
    this.setState({ filterarr: arr })
    console.log(arr);
  }
  
  render() {
    return (
      <div>
        <input type="text"  onChange={this.handlerchange} />
        {
          this.state.filterarr.map((p,i)=>{
            return <Card fname={p.name.first} lname={p.name.last} src={p.picture.large} key={i} />
          })
        }
      </div>
    )
  }
}

export default Avatar
