import React, { Component } from 'react'
import data from './data'
import Jumbotron from './Jumbotron'
import Address from './Address'
import PhoneNumber from './PhoneNumber'
import FoodCard from './FoodCard'
import './style.css'

import PriceTag from './PriceTag' /// WTF
class App extends Component {
  state = {
    data: undefined,
    word: undefined
  }
  componentDidMount = () => {
    this.setState({ data: data.data })
  }
  search = (e) => {
    let wordSearch = e.target.value
    this.setState({ word: wordSearch })
  }
  render () {
    return (
      <div>
        <div>
          <Jumbotron
            title={data.company[0].title}
          />
          <Address
            street={data.address.street}
            suite={data.address.suite}
            city={data.address.city}
            state={data.address.state}
            zip={data.address.zip}
          />
          {<PriceTag
            pT={data.priceTag} /// WTF
          />}
          <PhoneNumber
            phone={data.phone}
          />
          <div>
            <div>
              <form>
                <input
                  value={this.state.word}
                  onChange={this.search}
                  type='text'
                  placeholder='Search Food'
                />
                <button><em className='fa fa-search' /></button>
              </form>
            </div>
            <div>
              <small>Spicy Filter:</small>
              <input type='checkbox' value='mild' />
              <lable>Mild</lable>
              <input type='checkbox' value='medium' />
              <lable>Medium</lable>
              <input type='checkbox' value='reallySpicy' />
              <lable>Really Spicy</lable>
            </div>
            <ul>
              {
                <FoodCard
                  items={data.items}
                />
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App
