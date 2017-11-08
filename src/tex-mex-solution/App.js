import React, { Component } from 'react'
import data from '../mexicanRestaurant/data'
import RestaurantInfo from './RestaurantInfo'
import MenuContainer from './MenuContainer'

export default class TexMexSolution extends Component {
  render () {
    return (
      <div>
        <div>
          <RestaurantInfo
            name={data.company[0].title}
            address={data.address}
            phone={data.phone}
          />
        </div>
        <div>
          <MenuContainer />
        </div>
      </div>
    )
  }
}
