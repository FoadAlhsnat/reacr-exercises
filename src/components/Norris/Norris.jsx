import React, { Component } from 'react'
import Button from '../Button/Button'
import axios from 'axios'
import Joke from './joke'
import Option from './Option'

export class Norris extends Component {
  state = {
    joke: '',
    category:'animal',
    categories:[]
  }

  newjoke = async () => {
    const res = await axios.get('https://api.chucknorris.io/jokes/random',{
      params:{category:this.state.category}
    })
    this.setState({ joke: res.data.value })
    console.log( res.data);
  }
  onchange=(e)=>{
    this.setState({category:e.target.value})
  }
  async componentDidMount(){
    const res=await axios.get('https://api.chucknorris.io/jokes/categories')
    this.setState({categories:res.data})
    console.log(res);
  }
  render() {
    return (
      <div>
        <Button newjoke={this.newjoke} />
        <select onChange={this.onchange} name="categories" value={this.state.category} id="categories">
          {
            this.state.categories.map((category)=>{
              return (
                <Option value={category}/>
              )
            })
          }
        </select>
        <Joke joke={this.state.joke} />
      </div>
    )
  }
}

export default Norris
