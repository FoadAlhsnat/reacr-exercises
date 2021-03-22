import React, { Component } from 'react'
import './card.css'
export default class Card extends Component {
  state = {
    arr: this.props.old
  }
  componentDidUpdate(prevPrpos) {
    if (prevPrpos.old.length !== this.props.old.length) {
      this.setState({ arr: this.props.old })
    }
    console.log(prevPrpos.old.length,this.props.old.length);
  }
  render() {
    return (
      <div className={'container'}>
        {
          this.state.arr.map((item, i) => {
            return (
              <div className="card" key={i}>
                <div className="card-title"><h1>{item.name}</h1></div>
                <div className="content"><p>birthday:{item.birthday}</p>
                  <h2>favorite meats</h2>
                  <ul>
                    {
                      item.favoriteFoods.meats.map((item, i) => {
                        return <li key={i}>{item}</li>
                      })
                    }
                  </ul>
                  <h2>favorite fish foods</h2>
                  <ul>
                    {
                      item.favoriteFoods.fish.map((f, i) => {
                        return <li key={i}>{f}</li>
                      })
                    }
                  </ul>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
